---
title: 1.两数之和
date: 2021-03-24
categories: leetcode
tags:
- 数组
---

[原题地址](https://leetcode-cn.com/problems/two-sum/)给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

示例：

```js
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

## 对象映射实现

![两数之和](../images/两数之和.gif)

``` js
var twoSum = function(nums, target) {
  let obj = {}
  let result = []
  for (let i = 0; i < nums.length; i++) {
      let a = target - nums[i]
      if (obj.hasOwnProperty(a)) {
          result = [obj[a], i]
          break
      } else {
          obj[nums[i]] = i
      }
  }
  return result
};

// 执行用时：72 ms, 在所有 JavaScript 提交中击败了96.73%的用户
// 内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了90.02%的用户
```
时间复杂度：On
空间复杂度：On

## 双层for循环实现

``` js
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] === target) {
        return [i, j]
        break
      }
  }
  return [] // 防止没有找到
};

// 执行用时：80 ms, 在所有 JavaScript 提交中击败了79.71%的用户
// 内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了94.61%的用户
```

时间复杂度；On²。
空间复杂度：O1