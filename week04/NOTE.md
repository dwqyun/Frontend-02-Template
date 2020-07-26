# 学习笔记

## 浏览器原理总论

> URL --HTTP--> HTML --parse--> DOM --css computing--> DOM width CSS --layout--> DOM width position -- render--> Bitmap

### 状态机

- 有限状态机
  每个状态都是一个机器，机器本身没有状态，用函数表示是纯函数；每个机器都知道下一个状态，根据输入确定下一个状态

- 不使用状态机处理字符串
  使用变量保留是否找到某一字符串状态，匹配第一个字符后再联合判断下一个字符是否匹配，以此类推

- 使用状态机处理字符串
  使用状态函数，第一个状态函数匹配字符成功则进入下一个确定状态的函数，否则返回第一个状态函数，以此类推；结束状态可以纯返回状态，状态机可以重复使用reConsume
  > [字符串匹配的KMP算法](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)

### HTTP请求

- HTTP的协议解析
  ISO-OSI七层网络模型: 应用-表示-会话-传输-网络-数据链路-物理层  

- 服务端环境准备
  导入http启动请求监听  

- 实现一个HTTP
  封装一个Request类支持KV传参  

- send函数编写及response格式
  新建一个ResponseParse类处理response  

- 发送请求
  根据connection传递parse，并parse状态resolve结果  

- response解析
  使用状态机分段解析文本  

- response body解析
  根据不同content-type采用不同parser处理body格式  

### HTML解析

- HTML parse模块的文件拆分
  拆分文件parser用于解析HTML  

- 用FSM实现HTML的分析
  使用标准规定的HTML状态完成简化版Toy-browser  

- 解析标签
  开始、结束、自封闭标签  

- 创建元素
  除了状态机、业务逻辑还需要在标签结束后提交token  

- 处理属性
  属性值分为单引号、双引号、无引号三种写法，因此需要较多状态处理  
  处理属性的方式跟标签类似  
  属性结束时，我们把属性加到标签Token上  

- 用token构建DOM树
  使用栈构建  
  遇到开始标签时创建元素并入栈，遇到结束标签时出栈  
  自封闭节点可视为入栈后立刻出栈  
  任何元素的父元素是它入栈前的栈顶  

- 将文本节点加到DOM树
  文本节点与自封闭标签处理类似  
  多个问本节点需要合并  
