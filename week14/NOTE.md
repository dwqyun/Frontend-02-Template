# 学习笔记

## 手势与动画

- 单指手势过程  

![手势](https://raw.githubusercontent.com/dwqyun/PicBed/master/img/前端进阶训练营-1.%20手势与动画%20_%20手势的基本知识%20-%20Google%20Chrome%202020_10_3%2022_48_46.png)

### 实现鼠标操作

- 鼠标按下 mousedown -> 移动 mousemove -> 放开 mouseup 事件处理
- 手势按下 touchstart  -> 移动 touchmove  -> 放开 touchend  |取消 touchcancel；changedTouches为对应触摸事件的 Touch 对象列表
- 抽象封装 start -> move -> end | cancel 事件处理逻辑

### 实现手势的逻辑

- 处理长按可使用setTimeout处理状态变化
- 开平根运算较慢使用乘法替代XY轴位置判断

### 处理鼠标事件

- 函数调用时传入context区分点位，解决多个touch或左右鼠标键全局变量的使用问题
- content上下文缓存设值、取值、删除分别对应start、move、end|cancel
- 鼠标处理需要对mousedown 的 event.button 和mousemove event.buttons做区分点击了哪些按键，再按鼠标mouse事件序列做缓存操作
- 添加isListeningMouse限定重复鼠标事件绑定

### 派发事件

- dispatch 使用new Event或customEvent创建Event并dispatchEvent派发目标事件

### 实现一个flick事件

- 判断两点间平均速度，需要取一段点做平均计算，每点记录时间戳和XY轴点位

### 封装

- 解耦: listen 监听 => recognize 识别  => dispatch 派发
