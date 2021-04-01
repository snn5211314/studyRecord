---
title: 基础
date: 2021-03-25
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

## 任意值
  任意值（Any）用来表示允许赋值为任意类型。

  普通类型的变量，在赋值过程中是不被允许修改的
  ``` js
  let name1: string = 'tom'
  name1 = 77  // Type '77' is not assignable to type 'string'.
  ```
  但如果是any，则被允许修改：
  ``` js
  let name1: any = 'tom'
  name1 = 77 
  ```
  **属性和方法**
  可以在任意值上访问任何属性和方法
  ```js
  // 访问属性
  let anyThing: any = 'hello';
  console.log(anyThing.myName);
  console.log(anyThing.myName.firstName);

  // 访问方法
  let anyThing: any = 'Tom';
  anyThing.setName('Jerry');
  anyThing.setName('Jerry').sayHello();
  anyThing.myName.setFirstName('Cat');
  ```

  **声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。**

  **未声明类型的变量**
  变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
  ```js
  let something;
  something = 'seven';
  something = 7;

  something.setName('Tom');

  // 等价于
  let something: any;
  something = 'seven';
  something = 7;

  something.setName('Tom');
  ```

## 类型推导
如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

```js
let a = 'tom'
a = 7 // Type '7' is not assignable to type 'string'.

// 等价于 
let a: string = 'tom'
a = 7 // 数值类型不能赋值改字符串类型
```

在没有明确变量的类型时候，TypeScript 会自动推导出该变量的类型

**如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查**：
```js
let something;
something = 'seven';
something = 7;

something.setName('Tom');
```

## 联合类型
联合类型表示取值可以为多种类型中的一种。使用 `|` 分隔每个类型。
```js
let myLoveNumber: string | number;
myLoveNumber = 6;
myLoveNumber = 'six';

myLoveNumber = true; // error

// Type 'boolean' is not assignable to type 'string | number'.
// Type 'boolean' is not assignable to type 'number'.
```
上边例子说明，`myLoveNumber` 可以是 `string` 或 `number` ，但是不能为其他类型。

**访问联合类型的属性或方法**
当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法：**

```js
function getLength(something: string | number): number {
  return something.length;
}

//   Property 'length' does not exist on type 'number'.
```
在上边例子中，`length` 不是 `string` 和 `number` 的共有属性，所以报错了。
但是访问共有属性是没有问题的：

```js
function getLength(something: string | number): number {
  return something.toString();
}
```

**联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：**

```js
let myFavoriteNumber: string | number; // 声明变量myFavoriteNumber是可以为string或number类型
myFavoriteNumber = 'seven'; // 赋值字符串，ts中类型推论成变量是string类型
console.log(myFavoriteNumber.length); // 5 正常获取字符串类型的属性
myFavoriteNumber = 7; // 赋值数字，ts中类型推论成变量是number类型
console.log(myFavoriteNumber.length);  // 访问number类型的属性报错，因为没有length属性

// Property 'length' does not exist on type 'number'.
```