# 学习笔记

## CSS计算

### 收集CSS规则

- 遇到Style规则则保存CSS规则
- 调用CSS Parser分析CSS规则
- 需要仔细研究parser库分析CSS规则的格式

### 添加调用

- 创建一个元素后立即计算CSS
- 理论上，分析一个元素时所有CSS规则应收集完毕
- 在真实浏览器中，可能有写在body的style标签，此时需要重新计算CSS这里可以忽略

### 获取父元素序列

- 在computeCSS函数中，先知道元素的所有父元素才可以判断元素规则是否匹配
- 从上一步骤的stack可获取当前元素的所有父元素
- 获取和计算父元素匹配的顺序是从右往左的

### 选择器与元素的匹配

- 选择器也从当前元素向外排列
- 复杂选择器拆成针对单个元素的选择器，用循环匹配父元素队列

### 计算选择器与元素匹配

- 由选择器类型和元素属性，计算是否与当前元素匹配
- toyBrowser中仅实现三类基本选择器，实际还需要处理复合选择器

### 生成computed属性

- 一旦选择匹配，则应用选择器到元素上，形成computedStyle

### specificity的计算

- CSS规则根据specificity(权值)和后来优先规则覆盖
- specificity是四元组，越左权重越高
  `['inline': 0, 'id': 0, 'class': 0, 'tag': 0]`
- 一个CSS规则的specificity根据包含的简单选择器相加而成

## 排版

### 收集元素进行

- width height left right top bottom等属性抽象为main cross(盒内元素排列方向+主轴+交叉轴)相关属性，若设置no-warp则不分行
  
### 计算主轴

- 找出Flex元素
- 将主轴方向的剩余尺寸按比列分配给元素
- 若剩余空间为负数则所有flex元素为0，等比例压缩剩余元素

### 计算交叉轴

- 根据每一行最大元素尺寸计算行高
- 根据行高flex-align和item-align，确定元素具体位置

## 渲染

### 绘制单个元素

- 绘制依赖一个图形环境
- 这里使用npm包images
- 绘制在一个viewport进行
- 与绘制相关的属性:background-color、border、background-image

### 绘制DOM树

- 递归调用子元素的绘制方法完成DOM数的绘制
- 忽略一些不需要的绘制节点
- 实际浏览器中，文字绘制是难点，需要依赖字体库，这里忽略
- 实际浏览器中， 还会对图层做compositing(划分合成层)，这里忽略

## ToyBrowser总结

只实现了封装TCP通过URL请求HTTP接口，解析返回的HTML response内容parser为DOM结构，进而计算CSS，在计算布局，依赖npm包库实现渲染成图
