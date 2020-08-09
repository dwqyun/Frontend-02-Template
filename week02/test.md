<!-- 练习：编写带括号的四则运算产生式  -->
```
<S>::= <AddExp>
<AddExp>::= <AddExp> <AddOpt> <MulExp> | <MulExp>
<AddExp>::= < "+" > | < "-" >
<MulExp>::= <MulExp> <MulOpt> <AtomicExp> | <AtomicExp>
<MulOpt>::= < "*" > | < "/" >
<AtomicExp>:: = <"("> <AddExp> <")"> | <Number> 
```


<!-- 练习：尽可能寻找你知道的计算机语言，尝试把它们分类 -->
```
数据描述语言：HTML、CSS、JSON、SVG、XML、SQL
编程语言：Java、JavaScript、C、C++、Python、C#
解释型:Python Javascript Ruby Lua
编译型: C C++ C# java
脚本语言:JS PHP
函数式语言: Scala Lisp R
标记语言: HTML XML SGML
声明式: 函数式语言、标记语言、Lisp
命令式:常见的大部分语言
面向对象:C++ java Python C#
```

<!--  写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码。 -->
```js
//方法1：

function UTF8_Encoding0(str) {

  const encoder = new TextEncoder();

  const view = encoder.encode(str);

  return view;

}

//方法2：

function UTF8_Encoding1(text) {
  const code = encodeURIComponent(text);
  const bytes = [];
  for (var i = 0; i < code.length; i++) {
    const c = code.charAt(i);
    if (c === '%') {
      const hex = code.charAt(i + 1) + code.charAt(i + 2);
      const hexVal = parseInt(hex, 16);
      bytes.push(hexVal);
      i += 2;
    } else {
      bytes.push(c.charCodeAt(0));
    }
  }
  return new Uint8Array(bytes);
}

// 方法3：
function UTF8_Encoding2(str) {
  var bytes = [];
  var len = str.length;
  for (var i = 0; i < len; i++) {
    var code = str.charCodeAt(i);
    if (code >= 0x10000 && code <= 0x10ffff) {
      bytes.push((code >> 18) | 0xf0);
      bytes.push(((code >> 12) & 0x3f) | 0x80);
      bytes.push(((code >> 6) & 0x3f) | 0x80);
      bytes.push((code & 0x3f) | 0x80);
    } else if (code >= 0x800 && code <= 0xffff) {
      bytes.push((code >> 12) | 0xe0);
      bytes.push(((code >> 6) & 0x3f) | 0x80);
      bytes.push((code & 0x3f) | 0x80);
    } else if (code >= 0x80 && code <= 0x7ff) {
      bytes.push((code >> 6) | 0xc0);
      bytes.push((code & 0x3f) | 0x80);
    } else {
      bytes.push(code)
    }
  }
  return new Uint8Array(bytes);
}
```


<!-- 练习：用 JavaScript 去设计狗咬人的代码 -->
```js
class Animal {
  injuredVal = 0;
  bite(otherAnimal) {
    otherAnimal.injured += 1;
  }
}

class Dog extends Animal {
  injuredVal = 0;
  constructor(color, size) {
    color = '';
    size = '';
  }
}

class Human extends Animal {
  injuredVal = 0;
  constructor(name, age) {
    name = '';
    age = '';
  }
}

const dog = new Dog('black', 'big');
const man = new Human('Alice', '22');
dog.bite(man);
```
<!-- 作业：找出 JavaScript 标准里面所有具有特殊行为的对象 -->
```
Array：Array 的 length 属性根据最大的下标自动发生变化。
Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
bind 后的 function：跟原来的函数相关联。

所有对象都有内部方法[[]]
```
