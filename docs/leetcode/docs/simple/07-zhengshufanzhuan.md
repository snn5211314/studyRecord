---
title: 7.整数反转
date: 2021-03-24
categories: leetcode
tags:
- 数组
---

[原题地址](https://leetcode-cn.com/problems/reverse-integer/)给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

示例：

```js
输入：x = 123
输出：321

输入：x = -123
输出：-321

输入：x = 120
输出：21

```

## 字符串反转

  - 1.取绝对值后变成字符串反转
  - 2.判断是否超过边界，超过返回0
  - 3.判断原数有没有符号

**实现代码：**

``` js
var reverse = function(x) {
    const s = Math.abs(x).toString().split('').reverse().join('')
    if (s > Math.pow(2,31)) return 0
    return s * Math.sign(x)
};

// 执行用时：108 ms, 在所有 JavaScript 提交中击败了41.58%的用户
// 内存消耗：39.4 MB, 在所有 JavaScript 提交中击败了48.35%的用户
```
时间复杂度：On
空间复杂度：O1

## 取模

> 123 = 123 % 10 + 12 % 10 + 1 % 10

``` js
var reverse = function(x) {
   let s = Math.abs(x)
   let result = ''
   while(s > 0) {
      result += s % 10
      s = Math.floor(s / 10)
   }
   if (Number(result) > Math.pow(2,31)) return 0
   return Math.sign(x) * result
};

// 执行用时：88 ms, 在所有 JavaScript 提交中击败了96.49%的用户
// 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了86.12%的用户
```