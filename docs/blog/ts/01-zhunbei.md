---
title: 准备
date: 2021-03-125
---

### 准备
  **简介**

  typescript是 javascript 的超集， 弥补了javascript 在运行时的一些问题，但是 typescript是**静态类型**，也就是说在编译阶段就会报错。

  >强类型、弱类型、动态类型、静态类型

  ::: tip
  - 1、强类型：不允许任意的隐士类型转换，比如在 JS 中'1' + 1 = '11'这种，第二个数字类型的 1 转换成了字符串'1'，这种就是不允许的。
  - 2、弱类型：和强类型相反，对容忍隐士类型转换。
  - 3、静态类型：一个变量声明时类型就是确定的，后期无法更改。
  - 4、动态类型：声明过后还能修改变量类型，JS 就是典型的动态类型。
  :::


  **安装**

  推荐命令行工具安装

  ``` js
  npm install -g typescript
  ```
  以上命令会在全局环境下安装 tsc 命令，安装完成之后，我们就可以在任何地方执行 tsc 命令了。

  编译一个 TypeScript 文件很简单：

  ```js
    tsc 文件名.ts
  ```

  **测试**

  我们创建一个`hello.ts`文件
  ```js
  function sayHello(person: string) {
    return 'Hello, ' + person;
  }

  let user = 'Tom';
  console.log(sayHello(user))
  ```

  编译完成后,会在同级目录(默认配置)下生成同名的`.js`文件
  ```js
  function sayHello(person) {
    return 'Hello, ' + person;
  }
  var user = 'Tom';
  console.log(sayHello(user));

  ```

  > 至此，准备工作已经完成，可以开始TS之旅