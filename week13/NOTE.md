# 学习笔记

## 组件化

### 手势与动画

- 初步建立动画和时间线
  - setInterval自重复执行不安全，即时上一interval未执行完成接下来的interval同样按照间隔时间加入事件队列，setTimeout嵌套自重复则在上一计时器执行后嵌套的计时器才加入事件队列，requestAnimationFrame是浏览器执行下一帧刷新时执行回调
  - [timeline](https://developer.mozilla.org/zh-CN/docs/Web/API/Animation/timeline)使用requestAnimationFrame重复调用自身
  - 使用Symbol字符串唯一性生成tick等私有属性
  - Animation构造和CSS Animation属性类似，接收函数property变化取开始结束差值与时间的均匀变化
  - Timeline的start方法中使用Set集合增删，执行时间大于duration时纠正范围并delete animation
- 设计时间线的更新
  - Animation添加delay，Timeline add animation时添加加入时间和动画对象映射表，时间线按add time和start time比较更新
- 给动画添加暂停和重启功能
  - 暂停需要cancel tick，使用cancelAnimationFrame
  - 暂停时记录暂停开始时间，点击重启时记录暂停结束时间，取暂停起始差附加到时间线上重启Tick
- 完善动画的其他功能
  - animation duration调用处处理delay逻辑，receiveTime入参t需要减去delay，t为负值则未到动画启动时间，完善Animation对象以渲染CSS
  - 使用progress缓存当前动画时间进度，传入timeFunction变化曲线函数，函数使用JS实现的cubicBezier ease
- 对时间线进行状态管理
  - Timeline引入state管理，方法执行限定状态进入，inited --start()--> started --pause()--> paused --resume()--> started --reset()--> inited
