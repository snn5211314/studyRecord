---
title: js中的高阶函数
date: 2021-03-15
categories: js
tags:
- js
---

<!-- more -->

### 1.高阶函数
  是一个函数，入参可以接受一个函数，说白了，就是函数中调用另一个函数，实现想要的功能
### 2. `map`
  - 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
  - 回调函数中接受三个参数，第一个是当前元素，第二个是当前元素的索引，第三个是整个数组
  - 对原数组没有影响
  ```js
    const arr = [1,2,3,4,5]
    const obj = { addNum: 5 }
    const result = arr.map(function(cur, index, array) {
      console.log('当前值：',cur,'，当前值的索引：', index, ',整个引用的数组：', arr)
      return cur + index + array[index] + this.addNum
      // 第一次 1 + 0 + 1 + 5
      // 第二次 2 + 1 + 2 + 5
      // 第三次 3 + 2 + 3 + 5
      // 第四次 4 + 3 + 4 + 5
      // 第五次 5 + 4 + 5 + 5
    }, obj)

    console.log(result) // [7, 10, 13, 16, 19]
  ```

### 3. `reduce`
  - 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
  - 入参
    - callback接受4个参数，依次分别是累加值，当前值，当前值的索引，源数组
    - 调用callback的初始值，没有传，默认是源数组中的第一个元素
  - 返回值累加后的结果
  
  ```js
    let arr = [1,2,3,4,5]
    let result = arr.reduce(function(sum, cur, index, arr) {
      return sum + cur
      // 第一次 sum = 5, cur = 1, index = 0, arr = [1,2,3,4,5]
      // 第二次 sum = 6, cur = 2, index = 1, arr = [1,2,3,4,5]
      // 第三次 sum = 8, cur = 3, index = 2, arr = [1,2,3,4,5]
      // 第四次 sum = 11, cur = 4, index = 3, arr = [1,2,3,4,5]
      // 第五次 sum = 15, cur = 5, index = 4, arr = [1,2,3,4,5]
      // 最终跳出， 15 + 5
    }, 5)
    console.log(result) // 20
  ```
### 4. `filter`
  - 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
  - 入参
    - callback接受3个参数，依次分别是当前值，当前值的索引，源数组
    - thisArg，执行callback时候的this
  - 返回值：一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。
  - 不会对原数组产生影响
  ```js
    let arr = [1,2,3,4,5]
    let result = arr.filter(function (ele, index, arra) {
      return ele > 3
    })
    console.log(result) // [4,5]
  ```

### 5. `sort`
  - 方法接受两个参数，要比较的两个元素
  - 返回排完序的结果，会改变原数组的顺序
  ```js
    let arr = [2,4,6,73,23,54,3,7,8]
    arr.sort(function (a,b) {
      if (a > b) {
        return 1
      } else if (a == b) {
        return 0
      } else {
        return -1
      }
    })
    console.log(arr) // [2, 3, 4, 6, 7, 8, 23, 54, 73]
  ```
  如果sort接受的function没有传递，那个结果是按照什么规则来排序？

  > 答案是将数字转换成字符串，然后根据字母unicode值进行升序排序，也就是根据字符串的比较规则进行升序排序
  