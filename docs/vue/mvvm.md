---
title: 手动实现一个MVVM
date: 2021-03-11
categories: vue
tags:
- vue
---
<!-- more -->

<img :src="$withBase('/assets/img//vue/Vue响应式.png')" alt="nginx编码">

### 1. `Compile`

```javascript
class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        this.vm = vm
        // 1.将dom存在内存中
        const f = this.node2Fragment(this.el)
        // 2.编译模板
        this.compile(f)
        // 3.将内存中的dom添加到el元素中
        this.el.appendChild(f)
    }

    compile(frament) {
        const childNodes = frament.childNodes
        // 类数组转换成数组  [...childNodes]
        Array.from(childNodes).forEach(child => {
            if (this.isElementNode(child)) {
                this.compileElement(child)
            } else {
                this.compileText(child)
            }
            // 深度遍历
            if (child.childNodes && child.childNodes.length) {
                this.compile(child)
            }
        })
    }

    // 编译元素
    compileElement(node) {
        // 获取元素节点上的属性
        const attributes = node.attributes
        Array.from(attributes).forEach(attr => {
            const {name, value} = attr
            if (this.isDirective(name)) {
                const [, dir] = name.split('-') // html text model on:click  on:dbClick bind:title='msg'
                const [dirName, eventName] = dir.split(':')
                
                // 根据不同的指令做不同的解析
                CompileUtil[dirName](node, value, this.vm, eventName)
                // 移除标签上的指令属性
                node.removeAttribute('v-' + dir)
            } else if (this.isEventName(name)) { // @click
                const [, eventName] = name.split('@')
                CompileUtil['on'](node, value, this.vm, eventName)
                node.removeAttribute('@' + eventName)
            } else if (this.isBindName(name)) {
                const [, dir] = name.split(':')
                CompileUtil['bind'](node, value, this.vm, dir)
                node.removeAttribute(':' + dir)
            }
        })
    }
    // 编译文本
    compileText(node) {
        const content = node.textContent
        if (MustacheReg.test(content)) {
            CompileUtil['text'](node, content, this.vm)
        }
    }

    // 将真实dom转存到内存中，减少浏览器的重绘和回流
    node2Fragment(node) {
        let firstNode
        const childNodes = node.childNodes
        let fragment = document.createDocumentFragment()
        while(firstNode = node.firstChild) {
            fragment.appendChild(firstNode) // 这个方法有个特性是移除后添加
        }
        return fragment
    }

    // 判断是否是dom节点
    isElementNode(node) {
        return node.nodeType === 1
    }

    // 判断是否是指令
    isDirective(attrName) {
        return attrName.startsWith('v-')
    }

    // 判断是否是@
    isEventName(attrName) {
        return attrName.startsWith('@')
    }

    // 判断是否是：
    isBindName(attrName) {
        return attrName.startsWith(':')
    }
}


const CompileUtil = {
    getValue(expr, vm) {
        return expr.split('.').reduce((data, curVal) => {
            return data[curVal]
        }, vm.$data)
    },
    setValue(expr, vm, newValue) {
        return expr.split('.').reduce((data, curVal) => {
            data[curVal] = newValue
        }, vm.$data)
    },
    getContentVal(expr, vm) {
        return expr.replace(MustacheReg,(...args) => {
            return this.getValue(args[1], vm)
        })
    },
    text(node, expr, vm) {
        // vm.$data[expr]这样只能拿到单个
        let value
        if (expr.indexOf('{{') !== -1) {
            value = expr.replace(MustacheReg,(...args) => {
                new Watcher(vm, args[1], () => {
                    console.log(this.getContentVal(expr, vm))
                    this.updater.textUpdater(node, this.getContentVal(expr, vm))
                })
                return this.getValue(args[1], vm)
            })
        } else {
            value = this.getValue(expr, vm)
        }
        this.updater.textUpdater(node, value)
    },
    html(node, expr, vm) {
        const value = this.getValue(expr, vm)
        new Watcher(vm, expr, (newValue) => {
            this.updater.htmlUpdater(node, newValue)
        })
        this.updater.htmlUpdater(node, value)
    },
    model(node, expr, vm) {
        const value = this.getValue(expr, vm)
        new Watcher(vm, expr, (newValue) => {
            this.updater.modelUpdater(node, newValue)
        })
        node.addEventListener('input', (e) => {
            this.setValue(expr, vm, e.target.value)
        })
        this.updater.modelUpdater(node, value)
    },
    bind(node, expr, vm, attrName) {
        const value = this.getValue(expr, vm)
        this.updater.bindUpdater(node, attrName, value)
    },
    on(node, expr, vm, eventName) {
        let fn  = vm.$options.methods && vm.$options.methods[expr]
        node.addEventListener(eventName, fn.bind(vm), false)
    },
    updater: {
        modelUpdater(node, value) {
            node.value = value
        },
        textUpdater(node, value) {
            node.textContent = value
        },
        htmlUpdater(node, value) {
            node.innerHTML =value
        },
        bindUpdater(node, key, value) {
            node.setAttribute(key, value)
        }
    }
}

const MustacheReg = /\{\{(.+?)\}\}/g
```

### 2. `Observer`

```javascript
class Observer {
    constructor(data) {
        this.$data = data
        this.observe(this.$data)
    }

    observe(data) {
        // 数据类型是对象的时候才会劫持，观察
        if (data && typeof data === 'object') {
            Object.keys(data).forEach(key => {
                this.defineReactive(data, key, data[key])
            })
        }
    }

    // 数据劫持
    defineReactive(obj, key, value) {
        // 深度遍历
        this.observe(value)
        const dep = new Dep()
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: false,
            get() {
                // 添加
                Dep.target && dep.addSubs(Dep.target)
                return value
            },
            set: (newVal) => {
                // 新值也是一个对象
                this.observe(newVal)
                if (newVal !== value) {
                    value = newVal
                    // 通知更新
                    dep.notify()
                }
            }
        })
    }
}
```

### 3. `Watcher`

```javascript
class Watcher { // 监听  老值和新值不等时，出发更新操作
    constructor(vm, expr, cb) {
        this.vm = vm
        this.expr = expr
        this.cb = cb
        this.oldValue = this.getOldValue()
    }

    // 获取旧值
    getOldValue() {
        Dep.target = this // 防止重复添加
        const oldValue = CompileUtil.getValue(this.expr, this.vm)
        Dep.target = null
        return oldValue
    }

    // 更新的回调
    update() {
        const newValue = CompileUtil.getValue(this.expr, this.vm)
        if (newValue !== this.oldValue) {
            this.cb(newValue)
        }
    }
}
```

### 4. 添加关联并将数据代理到 `vm` 上

```javascript
class Vue {
    constructor(options) {
        // 将属性挂在到this上
        this.$el = options.el
        this.$data = this.isObject(options.data) ? options.data : data()
        this.$options = options

        if (this.$el) {
            // 创建观察者
            new Observer(this.$data)
            // 实现指令解析
            new Compile(this.$el, this)
            // 代理
            this.proxyData(this.$data)
        } else {
            console.log('没有宿主元素')
        }
    }

    proxyData(data) {
        for(let key in data) {
            Object.defineProperty(this, key, {
                get() {
                    return data[key]
                },
                set(newValue) {
                    data[key] = newValue
                }
            })
        }
    }

    isObject(data) {
        return typeof data === 'object'
    }
}
class Dep { // 依赖收集
    constructor() {
        this.subs = []
    }

    // 添加watcher
    addSubs(watcher) {
        this.subs.push(watcher)
    }

    // 通知更新
    notify() {
        this.subs.forEach(w => w.update())
    }
}
```

### 5.面试题

阐述一下你所理解的`MVVM`响应式原理

`vue`是采用数据劫持配置发布-订阅模式的方式，通过`Object.defineProperty()`来劫持各个属性的`setter` 和  `getter`，在数据变化时，发布消息给以来收集器，去通知观察者，做出对应的回调函数，去更新视图

`MVVM` 作为绑定的入口，整合`Observer`，`Compile`和`Watcher`三者，通过`Observer`来监听model数据变化，通过`Compile`来解析编译模板指令，最终利用`Watcher`搭配`Observer`，`Compile`之间的通信桥梁，达到数据变化=>试图更新，试图交互变化=>数据变更的双向绑定效果

