---
title: 引用类型的ts
date: 2021-04-1
---

## 引用类型
  ### 对象的类型——接口
  在TypeScript中，我们使用接口（interface）定义对象的类型。
  ```js
  interface Person {
    name: string;
    age: number;
  }

  let self: Person = {
    name: 'tom',
    age: 26
  }

  let self1: Person = {
    name: '张三'
  } //   Property 'age' is missing in type '{ name: string; }'.

  let self2: Person = {
    name: '楠楠',
    age: 27,
    gender: '女'
  } //   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
  ```
  可见， **赋值的时候，变量的形状必须和接口的形状保持一致**。

  **可选属性**
  可选属性，是在属性后加上 `?` ，表示这个属性是可选，在实现的时候，**可以不设置这个属性，但是不能设置未定义的属性**
  ```js
  interface Person {
    name: string;
    age?: number;
  }

  let tom: Person = {
    name: 'Tom'
  }

  let bob: Person = {
    name: 'bob',
    age: 18,
    gender: 'male'
  } // 报错，多了一个属性gender
  ```

  **任意属性**
  ```js
  interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
  }

  let tom: Person = {
      name: 'Tom',
      gender: 'male'
  };
  ```
  使用 `[propName: string]` 定义了任意属性取 `string` 类型的值。
  需要注意的是，**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：**
  ```js
  interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
  }

  let tom: Person = {
      name: 'Tom',
      age: 25,
      gender: 'male'
  };

  // index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
  // index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
  //   Index signatures are incompatible.
  //     Type 'string | number' is not assignable to type 'string'.
  //       Type 'number' is not assignable to type 'string'.
  ```

  **只读属性**
  只读属性，是在属性前加上 `readonly` ，表示这个属性是只读的。

  ```js
  interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
  }

  let tom: Person = {
      id: 89757,
      name: 'Tom',
      gender: 'male'
  };

  tom.id = 9527;
  // Cannot assign to 'id' because it is a constant or a read-only property.
  ```
  **只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**
  ```js
  interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
  }

  let tom: Person = { // 报错， 第一次给对象赋值没有说明只读属性
      name: 'Tom',
      gender: 'male'
  };

  tom.id = 89757; // 报错，只读属性不让赋值
  ```

  ### 数组类型
  在TypeScript中，数组类型有多种定义方式：
  **[类型 + 方括号]**
  ```js
  let numberArr: number[] = [1, 2, 3, 4, 5]
  ```
  数组中的项**不允许**出现其他的类型：
  ```js
  // error  Type 'string' is not assignable to type 'number'.
  let numberArr: number[] = [1, 2, '3', 4, 5]

  // 或者这样
  let numberArr: number[] = [1, 2, 3, 4, 5]
  // error  Argument of type '"8"' is not assignable to parameter of type 'number'.
  numberArr.push('6')
  ```
  **数组泛型**
  可以使用数组泛型`Array<elemType>`来表示数组
  ```js
  let numberArr: Array<number> = [1, 2, 3, 4, 5]
  ```
  **接口表示数组**
  ```js
  interface NumberArray {
    [index: number]: number;
  }
  let numberArr: NumberArray = [1, 1, 2, 3, 5];
  ```

  ### 函数的类型