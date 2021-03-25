---
title: 9.回文数
date: 2021-03-25
categories: leetcode
tags:
- 数组
---

[原题地址](https://leetcode-cn.com/problems/palindrome-number/)给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

示例：

```js
输入：x = 121
输出：true

输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。

```

## 字符串反转

  - 1.变成字符串反转
  - 2.判断是否和之前相等

**实现代码：**

``` js
var isPalindrome = function(x) {
    if (x < 0) return false
    const s = x.toString().split('').reverse().join('')
    if (Number(s) === x) return true
    return false
};
```

## 对称
  - 1.变成字符串
  - 2.遍历字符串长度的一半
  - 3.看第一位是否和最后一位相等, 索引加一
  - 4.重复3，直到遍历完成

```js
var isPalindrome = function(x) {
  if (x < 0) return false
  const s = x.toString()
  let result = true
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      result = false
      break
    }
  }
  return result
};
```

## 取模

> 123 = 123 % 10 + 12 % 10 + 1 % 10

``` js
var isPalindrome = function(x) {
    if (x < 0) return false
    let result = ''
    let s = x
    while(s > 0) {
        result += s % 10
        s = Math.floor(s / 10)
    }
    return Number(result) === x
};
```