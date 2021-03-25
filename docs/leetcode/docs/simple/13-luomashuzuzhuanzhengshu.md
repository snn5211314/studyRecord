---
title: 13.罗马数字转整数
date: 2021-03-25
categories: leetcode
tags:
- 数组
---

[原题地址](https://leetcode-cn.com/problems/roman-to-integer/)罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

``` js
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

示例：

```js

输入: "III"
输出: 3

输入: "IV"
输出: 4

输入: "IX"
输出: 9

输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.

输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.

```

## 解题思路
  正常情况下，罗马字符是一一对应的，然后直接相加，排除六种特殊情况，需要特殊处理，所以我是把特殊情况做成了对象映射。然后相加

**实现代码：**

``` js
var romanToInt = function(s) {
    let obj = { // 特殊情况的映射
        'I': {
            'V': 4,
            'X': 9
        },
        'X': {
            'L': 40,
            'C': 90,
        },
        'C': {
            'D': 400,
            'M': 900
        }
    }
    let normal = { // 罗马字符的映射
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) { // 特殊情况的
            if (obj[s[i]][s[i+1]]) {
                result += obj[s[i]][s[i+1]]
                i++
            } else {
                result += normal[s[i]]
            }
        } else { // 正常情况
            result += normal[s[i]]
        }
    }
    return result
};
```
执行用时：168 ms, 在所有 JavaScript 提交中击败了61.97%的用户
内存消耗：44.5 MB, 在所有 JavaScript 提交中击败了24.31%的用户

## 其他解法

方法一：
```js
symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};
```
方法二：

``` js
var romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i - 1]] < obj[s[i]]) {
      res -= 2 * obj[s[i - 1]]; // 满足特殊情况的时候，减去两次上次的值
    }
    // 因为每次会先加一次该字符对应的值
    res += obj[s[i]];
  }

  return res;
};
```