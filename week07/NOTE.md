# 学习笔记

## 重学CSS

### CSS排版

标签 Tag，元素 Element，盒 Box  
  > HTML代码中可以书写*开始标签*，*结束标签*，和*自封闭标签*。  
  一对起止标签，表示一个*元素*。  
  DOM树中存储的是*元素*和其它类型的节点(Node)。  
  CSS选择器选中的是元素。  
  CSS选择器选中的*元素*，在排版时可能产生多个*盒*。  
  排版和渲染的基本单位是*盒*。

- 正常流
  - 盒模型  
  盒由内容加内外边距组成：content + padding + margin，box-sizing: content-box = content，box-sizing: border-box = content + padding
  - 内联格式化上下文IFC、[块格式化上下文（Block Formatting Context，BFC）](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
- 正常流的行级排版
  - 行模型  
  line-top + text-top + base-line + text-bottom + line-bottom；line-height行高的定义就是两基线的间距，vertical-align的默认值就是基线，非替换元素的内联元素，其可视高度完全由line-height决定
- 正常流的块级排版
  - 外边距折叠（Margin collapsing）只发生在属于同一BFC的块级元素之间，折叠以较大的margin为准
- BFC合并
  - Block Box = Block Container + Block-level Box：里外都有BFC的
  - block box && overflow:visible
  - BFC合并与float
  - BFC合并与边距折叠
- Flex排版
  - 收集盒进行
  - 计算盒在主轴方向的排布
  - 计算盒在交叉轴方向的排布
  - 分行和计算交叉轴

### CSS动画与绘制

- 动画
  - Animation
    - @keyframes定义

    - animation属性  
    animation-name 时间曲线  
    animation-duration 动画的时长;  
    animation-timing-function 动画的时间曲线;  
    animation-delay 动画开始前的延迟;  
    animation-iteration-count 动画的播放次数;  
    animation-direction 动画的方向  
  - Transition  
    transition-property 要变换的属性;  
    transition-duration 变换的时长;  
    transition-timing-function 时间曲线;  
    transition-delay 延迟。  
- 颜色
  - CMYK与RGB
  - HSL与HSV
- 绘制
  - 几何图形
    - border
    - box-shadow
    - border-radius
  - 文字
    - font
    - text-decoration
  - 位图
    - background-image
    - data-url+svg
