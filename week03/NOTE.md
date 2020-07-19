# 学习笔记

## **JS表达式**

- 运算符和表达式
  - 运算符优先级  
  
    Expressions中Member(`./[]属性访问、标签函数、super属性访问、new.target、new Foo()`)、New(`new Foo`)，如`new Foo()`优先级比`new Foo`高；  

    Reference类中`Object Key delete assign`，在运行时使用引用类型进行读写操作；  

    Call Expressions中`foo()、super()、foo['b']、foo().b、foo()`abc``  

  - 运算符的左右操作数  

    Update Expressions 自增自减  

    Unary Expressions 单目运算符，如`delete a.b、void foo()、typeof a、+a、-a、~a、 !a、await a`  

    Exponental Expressions 指数运算符`**`，右结合右边先计算，如`3**2**3`等于`3**(2**3)`  

    Multiplicative/Additive/Shift/Relationship Expressions 乘除、加减、移位(`>> << >>>`)、关系比较(`< > <= >= instanceof in`)运算符  

    Equality/Bitwise Expressions值相等`==`、值类型相等`===`、按位与、按位异或、按位或

    Logical/Conditional Expressions逻辑`&& ||`、条件运算符`?:`

- 类型转换
  - 显隐式转换
  隐式转换如`+`运算符、`==`值相等比较运算符、`obj['1']`对象成员key使用字符索引访问；显示转换如`String()、Number()、Boolean()...`等原生对象来封装对象；其中`==`运算符行为较为复杂，如是Number==String比较则String ToNumber再进行比较，如是Boolean==String/Number...则Boolean ToNumber再进行比较，如是两对象比较则应该拆封调用`ToPrimitive(toSting/valueOf)`获取值比较  

  拆箱转换unBoxing与装箱转换Boxing，如对象参与运算则进行拆箱转换，如'a'.toString()中字面量a会自动装箱调用new 原生对象生成`String`对象，再调用对象方法  

  - 引用与复制
  引用是指向变量的指针即内存地址，复合对象通过引用复制方式赋值和传递，基本类型值是通过值复制方式传递，值类型决定赋值、参数传递的方式，JS中的引用只指向值，不能指向变量和引用，一个引用无法修改另一引用的指向  

## **JS语句**

- 运行时
  - Completion Record
  类型`[[type]]`:normal,break,continue,return,or throw  
  值`[[value]]`:基本类型  
  标签`[[target]]`:label  

- 简单语句与复合语句
  - 简单语句
  表达式语句ExpressionStatement、空语句EmptyStatement、DebuggerStatement、ThrowStatement、ContinueStatement、BreakStatement、ReturnStatement  

  - 复合语句
  块语句BlockStatement、IfStatement、SwitchStatement、IterationStatement、WithStatement、LabelledStatement、TryStatement  
  
- 声明
  - var/let/const/class/function/import等声明型语句都会响应预处理过程
  - 作用域/链即执行上下文，全局/局部作用域，函数作用域/块作用域

## **JS结构化**

- 宏任务与微任务
  - 异步执行API如宏任务setTimeout/requireAnimationFrame，微任务如Promise.then()
  - 事件循环流程 get code -> execute -> wait -> get code
- JS函数调用
  - 函数调用会形成Execution Context Stack 执行上下文栈，上下文包含变量声明、函数声明、执行模式、执行状态以及内置对象等信息
  - LexicalEnvironment:this/new.target/super/变量
  - VariableEnvironment:历史遗留用于处理var声明
  - EnvironmentRecord: Declarative/Global/Object/Function/module
  - Function-Closure:每个函数都会产生闭包
  - Realm: JS中函数表达式和对象直接量均会创建对象，使用.做隐式转换也会创建对象
