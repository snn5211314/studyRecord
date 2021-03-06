---
title: 防抖和节流
date: 2021-03-20
categories: js
tags:
- js
---

<!-- more -->

## 前言
  web针对响应跟不上触发频率这类问题，给出的解决方案是**防抖**和**节流**。应用场景，在给DOM绑定事件的时候，我们是无法控制触发的频率。
  如鼠标移动事件onmousemove, 滚动滚动条事件onscroll，窗口大小改变事件onresize，瞬间的操作都会导致这些事件会被高频触发。
  在实时检查输入时，如果我们绑定onkeyup事件发请求去服务端检查，用户输入过程中，事件的触发频率也会很高，会导致大量的请求发出，响应速度会大大跟不上触发。
  所以，就出现了以下两种解决方法。
## 防抖(debounce)
  对于**短时间内连续触发**的事件，防抖的含义就是让**某个时间期限**内，事件处理函数只执行**一次**。

  ### 非立即执行（延迟）
    
  执行时机是在周期末尾 <br/>

![延迟防抖](./images/延迟防抖.png)
  
  ``` js
    // 消耗比较大，函数每次都会执行，定时器在wait周期中，每次调用都会清除和重新生成
    function debounce(fn, wait) {
      let timer = null

      return (...args) => {
        if (timer) { // 如果定时器存在就清除，重新设置定时器
          clearTimeout(timer)
        }

        timer = setTimeout(() => {
          fn.apply(this, args)
        }, wait)
      }
    }
  ```

  ### 立即执行（前缘）

  执行时机是在周期的开始 <br/>

![前缘防抖](./images/前缘防抖.png)

  ``` js
    function debounce(fn, wait) {
      let timer = null

      return (...args) => {
        if (timer) { // 如果定时器存在就清除，重新设置定时器
          clearTimeout(timer)
        }

        let callNow = !timer;

        timer = setTimeout(() => {
          timer = null
        }, wait)

        if (callNow) {
          fn.apply(this, args)
        }
      }
    }
  ```

  ### 优化后的防抖

  ```js
    /**
     * @desc 函数防抖
     * @param fn 函数
     * @param wait 延迟执行毫秒数
     * @param immediate true 表立即执行，false 表非立即执行
     */
    function debounce(fn, wait, immediate) {
      let timer

      return (...args) => {
        if (timer) {
          clearTimeout(timer)
        }

        if (immediate) {
          let callNow = !timer;

          timer = setTimeout(() => {
            timer = null
          }, wait)

          if (callNow) {
            fn.apply(this, args)
          }
        } else {
          timer = setTimeout(() => {
            fn.apply(this, args)
          }, wait)
        }
      }
    }
  ```

## 节流(throttle)

连续触发事件但是在 n 秒中只执行一次函数。节流会**稀释**（满足一定条件）函数的执行频率。<br/>

### 时间戳方式

```js
  function throttle(fn, wait) {
    let previous = 0

    return (...args) => {
      let current = new Date()
      if (current - previous > wait) {
        fn.apply(this, args)
        previous = current
      }
    }
  }
```

### 定时器方式

```js
  function throttle(fn, wait) {
    let timer = null
    return (...args) => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null
          fn.apply(this, args)
        }, wait)
      }
    }
  }
```