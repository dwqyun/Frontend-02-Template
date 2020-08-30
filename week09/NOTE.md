# 学习笔记

## TicTacToe

### 实现一个TicTacToe游戏

  给9个落子点添加点击监听，人机两方来回落点，重新渲染棋盘标识状态，判断胜负循环3行、3列、两对角斜线是否三字连棋

### 给游戏添加一个完美的AI

  使用一维数组乘法计算行列，使用`Object.create(pattern)`克隆棋盘数组，以及双层循环结合`label`递归寻找AI最佳落子点

## 异步编程-async异步编程

- callback (setTimeout)
- Promise
- async/await
- generator模拟async/await
- async generator
- for-await-of
  async/await语法可以将代码写法同步化，结合Promise.resolve将异步callback(如setTimeout、event listener、网络I/O订阅事件等回调)写为同步代码：

  ```js
  // 定时器回调
  function sleep(time) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time);
    })
  }

  // 事件回调
  function happen(element, eventName) {
    return new Promise((resolve, reject) => {
      element.addEventListener(eventName, resolve, { once: true });
    })
  }
  ```

## 寻路

### 实现一个地图编辑器

  使用mousemove结合mousedown/mouseup/contextmenu事件标记鼠标按住滑动过的点，并localStorage缓存地图点

### 广度优先搜索

  广度搜索使用队列queue的 push + shift操作， 深度搜索使用栈stack的 push + pop操作，从开始点上下左右搜索终点

### 通过异步编程可视化

  使用sleep异步函数将搜索过的点标记绿色

### 启发式搜索一

  shift将数组第一位删除，unshift将元素插入到数组第一位，以及splice删除指定元素都是O(n)操作，pop和push数组末端删除添加操作更快，splice可以使用数组赋值和pop代替

### 启发式搜索二
