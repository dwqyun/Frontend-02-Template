# 学习笔记

## 组件化

### 轮播组件

- 手势动画应用
  - carousel应用animation和gesture，gesture pan事件替换mousemove逻辑、panend替换mouseup逻辑，animation则用于创建两实例控制前后切换图片的滑动
  - 点击图片时暂停动画(pause)，以及解决暂停后的拖拽位置问题
  - flick快速动作后顺着移动方向切换
  
- 为组件添加更多属性
  - 更新framework 中component mountTo、state、attribute，并应用到carousel
  - 添加carousel 自定义事件
  - 实现根据数据渲染组件子节点操作
  