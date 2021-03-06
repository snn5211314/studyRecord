---
title: js中的排序
date: 2021-03-17
categories: js
tags:
- js
---

<!-- more -->

## 排序算法
  - 非线性时间比较类排序
    - 交换排序
      - 冒泡排序
      - 快速排序
    - 插入排序
      - 简单插入排序
      - 希尔排序
    - 选择排序
      - 简单选择排序
      - 堆排序
    - 归并排序
      - 二路并归排序
      - 多路并归排序
  - 线性时间非比较类排序
    - 基数排序
    - 桶排序
    - 计数排序

## 算法复杂度

|排序方法|时间复杂度（平均）|空间复杂度|稳定性|
|----|----|----|----|
|插入排序|O(n2)|Ο(1)|稳定|
|希尔排序|O(n2)|Ο(1)|不稳定|
|选择排序|O(n2)|Ο(1)|不稳定|
|堆排序|O(nlog2n)|Ο(1)|不稳定|
|冒泡排序|O(n2)|Ο(1)|稳定|
|快速排序|O(nlog2n)|O(nlog2n)|不稳定|
|归并排序|O(nlog2n)|Ο(n)|稳定|
||
|计数排序|O(n+k)|O(n+k)|稳定|
|桶排序|O(n+k)|O(n+k)|稳定|
|基数排序|O(n*k)|O(n+k)|不稳定|


## 1.冒泡排序
  ### 描述
   - 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
   - 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
   - 针对所有的元素重复以上的步骤，除了最后一个；
   - 重复步上述骤，直到排序完成。

  ### 演示
![冒泡排序](./images/冒泡排序.gif)

  ### 代码
  ```js
    function bubbleSort(arr) {
      for (let i = 0; i < arr.length - 1; i++) { //需要外循环的次数
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) { // 比较相邻的元素，满足条件，交换位置
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
          }
        }
      }
      return arr
    }
  ```

## 2.快速排序
  ### 描述
   - 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
   - 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
   - 重复步上述骤，直到排序完成。
  ### 演示
![选择排序](./images/选择排序.gif)

  ### 代码
  ```js
    function selectionSort(arr) {
      let minIndex, temp
      for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i // 记录最小值索引
        temp = arr[i] // 缓存最小值
        for (let j = i + 1; j < arr.length; j++) {
          if (temp > arr[j]) { // 寻找最小值的索引
            minIndex = j
          }
        }
        // 交换数据
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
      }
      return arr
    }
  ```

## 3.插入排序
  ### 描述
  - 从第一个元素开始，该元素可以认为已经被排序；
  - 取出下一个元素，在已经排序的元素序列中从后向前扫描；
  - 如果该元素（已排序）大于新元素，将该元素移到下一位置；
  - 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
  - 将新元素插入到该位置后；
  - 重复步上述骤，直到排序完成
  ### 演示
![插入排序](./images/插入排序.gif)
   
  ### 代码
  ```js
    function insertionSort(arr) {
      let preI, curD
      for (let i = 1; i < arr.length; i++) { // 第一个元素已跳过
        preI = i - 1
        curD = arr[i] // 记录当前要插入的值
        while (preI > -1 && arr[preI] > curD) {
          arr[preI + 1] = arr[preI] // 要插入一条数据，所以满足条件的元素下标 +1
          preI-- // 下标向前一位，比较前一个元素和当前元素
        }
        arr[preI + 1] = curD // 最终要插入的下标是preI + 1, 因为上边执行了preI--
      }
      return arr
    }
  ```

## 4.希尔排序
  ### 描述
  - 选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
  - 按增量序列个数k，对序列进行k 趟排序；
  - 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
  ### 演示
![希尔排序](./images/希尔排序.gif)
   
  ### 代码
  ```js
    function shellSort(arr) {
      var len = arr.length,
      temp, gap = 1;
      while (gap < len / 3) { // 动态定义间隔序列
        gap = gap * 3 + 1;
      }
      for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
          temp = arr[i];
          for (var j = i - gap; j > 0 && arr[j] > temp; j -= gap) {
            arr[j + gap] = arr[j];
          }
          arr[j + gap] = temp;
        }
      }
      return arr;
    }
  ```

## 4.归并排序
  ### 描述
  - 把长度为n的输入序列分成两个长度为n/2的子序列；
  - 对这两个子序列分别采用归并排序；
  - 将两个排序好的子序列合并成一个最终的排序序列。
  ### 演示
![归并排序](./images/归并排序.gif)
   
  ### 代码
  ```js
    function mergeSort(arr) {
      var len = arr.length,
      if (len < 2) {
        return arr
      }
      let middle = Math.floor(len / 2)
      let left = arr.slice(0, middle)
      let right = arr.slice(middle)
      return merge(mergeSort(left), mergeSort(right)) // 递归处理无限二分
    }
    function merge(left, right) {
      var result = [];
      while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      while (left.length) result.push(left.shift());
      while (right.length) result.push(right.shift());
      return result;
    }
  ```

## 5.快速排序
  ### 描述
  快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：
  - 从数列中挑出一个元素，称为 “基准”（pivot）；
  - 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
  - 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
  ### 演示
![快速排序](./images/快速排序.gif)
   
  ### 代码
  ```js
    function quickSort(arr, left, right) {
      let len = arr.length,
      partitionIndex, left = typeof left != 'number' ? 0 : left,
      right = typeof right != 'number' ? len - 1 : right;
      if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
      }
      return arr;
    }

    function partition(arr, left, right) {
      let pivot = left,
      // 设定基准值（pivot）
      index = pivot + 1
      for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
          swap(arr, i, index);
          index++;
        }
      }
      swap(arr, pivot, index - 1);
      return index - 1;
    }


    function swap(arr, i, j) { // 交换
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  ```