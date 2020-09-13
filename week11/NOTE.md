# 学习笔记

## Proxy与双向绑定

### Proxy的基本用法

- [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 对象用于拦截并操作对象属性、函数调用等，`const p = new Proxy(target, handler)`，target为Proxy目标对象，handler为代理各属性操作对象，p则是生成的代理对象；Proxy一般用于底层库实现，因为使用代理对象后对象的的操作结果变得不可预测

### 模仿reactive实现原理

- 简单的在get时缓存事件，在set循环触发事件回调

### 优化reactive

- 使用Object和prop二元组结合Map、Array存储每个属性访问的回调事件，对Proxy对象设置属性值时根据Object和prop循环触发回调事件
- 若访问的属性值还是Object类型，则嵌套Proxy，调用reactive生成Proxy对象并使用Map(obj, proxy)缓存Proxy对象

### reactivity响应式对象

- reactive是model->view的绑定，还需要条件view事件监听处理view->model的绑定，完成双向绑定，vue中使用build compiler实现零代码双向绑定

## 使用Rang实现DOM精准操作

### 基本拖拽

- 计算鼠标起始位置差值，mouseup时缓存上一次translate横纵值，在mousemove时赋值transform

### 正常流里的拖拽

- childNodes + textContent 取文本节点文字长度，使用range+getBoundingClientRect计算每个插入点的位置，并缓存
- 循环ranges寻找距离移动块最近的插入点，使用`range.insertNode(dragable)`替换transform
