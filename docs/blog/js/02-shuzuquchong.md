---
title: js中的数组去重
date: 2021-03-16
categories: js
tags:
- js
---

<!-- more -->

:::tip
  有一个数组，[1,2,2,3,5,3,6,5]; 去重后得到的结果是[1,2,3,5,6];
:::

1. for循环
```js
  function uniqu(arr : Array) : Array {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.indexOf(arr[i]) === -1 && newArr.push(arr[i])
    }
    return newArr
  }
```
2. 对象键值的唯一性
```js
  function uniqu(arr : Array) : Array {
    // obj = {}
    let obj = Object.create(Object.prototype) // 装逼的写法
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (!obj[arr[i]]) { // 利用数组中的每一个元素作为对象的键值
        obj[arr[i]] = true
        newArr.push(arr[i])
      }
    }
    return newArr
  }
```
3. ES6中的set
```js
  function uniqu(arr : Array) : Array {
    return Array.from(new Set(arr)) // 利用数组from方法，将Set转换成数组    
  }
```
4. 数组的splice方法
```js
  function uniqu(arr : Array) : Array {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1)
          j-- // splice会改变元素组，防止下标越界，所以需要j--
        }
      }
    }
    return arr
  }
```
5. 还有好多种组合可以实现，forEach + includes  filter + includes 等
```js
  let newArray = []
  arr.forEach(item => {
    !newArray.includes(item) && newArray.push(item)
  })
```
> 欢迎完善😄
