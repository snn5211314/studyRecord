---
title: 基础
date: 2021-03-125
---

## 原始数据类型
  javascript中数据类型分为两种:<br>
    - 原始数据类型：数字、字符串、布尔值、`null`、`undefined` 和 `BigInt` 、`Symbol`<br>
    - 对象数据类型：Array、Function、Object、RegExp、Date、Math
  
  ### 布尔值
  布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型：
  ```js
    let isDone: boolean = true;
  ```
  注意：javaScript中通过`new Boolean(1)`得到的是一个布尔类型的对象。
  ```js
    let isDone: boolean = new Boolean(1);

    // Type 'Boolean' is not assignable to type 'boolean'.
    // 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.

    // 所以需要这样生命
    let isDone: Boolean = new Boolean(1);
  ```
  但是直接调用`Boolean(1)`，得到的返回值是布尔值
  ```js
    let isDone: boolean = Boolean(1);
  ```
  在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样，不再赘述。

  ### 数值
  使用 number 定义类型：
  ```js
  let decLiteral: number = 6;
  let hexLiteral: number = 0xf00d;
  // ES6 中的二进制表示法
  let binaryLiteral: number = 0b1010;
  // ES6 中的八进制表示法
  let octalLiteral: number = 0o744;
  let notANumber: number = NaN;
  let infinityNumber: number = Infinity;
  ```
  编译结果：
  ```js
  var decLiteral = 6;
  var hexLiteral = 0xf00d;
  // ES6 中的二进制表示法
  var binaryLiteral = 10;
  // ES6 中的八进制表示法
  var octalLiteral = 484;
  var notANumber = NaN;
  var infinityNumber = Infinity;
  ```
  从结果中，我们可以看到 TypeScript 中的二进制和八进制，在编译完成后都是十进制。

  ### 字符串
  使用 string 定义类型，和 JavaScript 中一样，使用`'`或`"`表示字符串：
  ```js
  let name: string = "bob";
  name = "smith";

  // 模板字符串
  let name: string = `Gene`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${ name }.
  I'll be ${ age + 1 } years old next month.`;
  ```

  ### 空值
  使用 void 定义类型，JavaScript 中没有这个类型，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
  ```js
  function alertName(): void {
    alert('My name is Tom');
  }
  ```
  如果声明一个变量，是没有意义的，只能赋值给`null`或`undefined`
  `let unusable: void = undefined;`

  ### null和undefined
  使用 undefined 和 null 定义数据类型
  ```js
  let u: undefined = undefined;
  let n: null = null;
  ```
  与 void 的区别是，undefined 和 null 是**所有类型的子类型**。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量，而 void 类型不行
  ```js
  let num: number = undefined;

  // 这样也不会报错
  let u: undefined;
  let num: number = u;

  // 会报错，void不能赋值给其他类型的变量
  let u: void;
  let num: number = u;

  // Type 'void' is not assignable to type 'number'.
  ```