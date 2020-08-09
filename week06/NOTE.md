# 学习笔记

## 重学CSS

### CSS总论

- CSS语法的研究

  ```
  总体结构
  @charset
  @import
  rules
    @media
    @page
    rule

  ```

  - at-rule
    at-rule 由一个 @ 关键字和后续的一个区块组成，如果没有区块，则以分号结束  

  - qualified rule
    指普通的 CSS 规则，由选择器和属性指定构成的规则  

- CSS@规则的研究  
  `@media`、 `@keyframes`、`@fontface`三个较为常用
  - [@charset](https://www.w3.org/TR/css-syntax-3/@charset)
  用于提示 CSS 文件使用的字符编码方式  
  - [@import](https://www.w3.org/TR/css-syntax-3/@import)
  用于引入一个 CSS 文件，支持 supports 和 media query 形式
  - [@media](https://www.w3.org/TR/css-cascade-4/@media)
  用于对设备的类型进行一些判断  
  - [@page](https://www.w3.org/TR/css3-conditional/@page)
  用于分页媒体访问网页时的表现设置  
  - [@counter-style](https://www.w3.org/TR/css-page-3/@counter-style)
  用于定义列表项的表现  
  - [@keyframes](https://www.w3.org/TR/css-counter-styles-3@keyframes)
  用于定义动画关键帧  
  - [@fontface](https://www.w3.org/TR/css-animations-1/@fontface)
  用于定义一种字体  
  - [@supports](https://www.w3.org/TR/css-fonts-3/@supports)
  用于检查环境的特性  
  - [@namespace](https://www.w3.org/TR/css3-conditional/@namespace)
  用于表示内部的 CSS 选择器全都带上特定命名空间  
  
- CSS规则的结构
  - [选择器](https://www.w3.org/TR/selectors-4/)
  选择器：常见的有类选择器、标签选择器、ID选择器、通配选择器  
  选择符：``空格表后代、`>`表子代、`+`表直接相邻节点、`~`表兄弟节点、`||-`表列关系  
  伪类：如:hover，有一个冒号与浏览器行为、用户行为关联  
  伪元素: 如::before有两个冒号，会在HTML中生成相应虚拟节点  
  - [属性](https://www.w3.org/TR/css-variables/)
  属性是由中划线、下划线、字母等组成的标识符，CSS 还支持使用反斜杠转义，两中划线开头属性会被认为是 CSS 变量与var函数配合使用  
  - [值](https://www.w3.org/TR/css-values-4/)
  每个 CSS 属性可以取到不同的值，这里的值可能是字符串、关键字标识符、URL、整数 、百分比、颜色、图片、函数  
  其中计算型函数`calc`、`attr`较为实用
  > [CSS选择器世界笔记](https://www.yuque.com/dwqyun/learn/ybag5p)
  
- 收集标准
  爬取W3 CSS标准信息
  
- CSS总论总结

  ```
  - at-rule
  - 普通规则
    - 选择器
    - 声明列表
      - 属性
      - 值
        - 值的类型
        - 函数
  ```

### CSS选择器

- 选择器语法
  - 简单选择器

    ```
    *
    div svg|a
    .cls
    #id
    [attr=value]
    :hover
    ::before
    ```

  - 复合选择器  
  <简单选择器><简单选择器><简单选择器>  
  *或div必须写在前面  
  - 复杂选择器  
  <符合选择器><复合选择器>  
  <符合选择器>">"<复合选择器>  
  <符合选择器>"~"<复合选择器>  
  <符合选择器>"+"<复合选择器>  
  <符合选择器>"||"<复合选择器>  
  
- 选择器的优先级
  - specificity是四元组越左权重越高  
  `['inline': 0, 'id': 0, 'class|attr': 0, 'tag': 0]`，如`#id div.a#id{...}`四元组为[0, 2, 1, 1]，若取**N为10**(实际应为256的次幂)则有`S = 0 * (N**3) + 2*(N**2) + 1*(N**1) + 1`
  - 0级(数值0)：通配选择器(`*`)、选择符和逻辑伪类(`:not()`、`:is()`、 `:where()`)，其中`:not()和:is()`伪类括号中的选择器可以影响优先级  
  - 1级(数值1)：标签选择器  
  - 2级(数值10)：类选择器、属性选择器和伪类  
  - 3级(数值100)：ID选择器，最小限度关联样式使用，为了方便重置样式优先使用类选择器  
  - 4级(数值1000)：元素的style属性内联，另外`<style>`标签HTML内联样式规则优先于`<link>`标签引入的外部样式  
  - 5级(数值infinite)：`!important`，顶级优先级，限制使用，可以使用的场景是使JavaScript设置无效  
- `后来居上`原则
  - 优先级数值一致时后声明的优先  
  - 低耦合增加优先级数值的技巧，类选择器+必然存在的属性选择器，如`.foo[class] {}`  
  
- 伪类
  - 链接行为
  :any-link
  :link :visited
  :hover
  :active
  :focus
  :target
  这些用户行为伪类、URL定位伪类用于实现页面交互效果  
  - 树结构
  :empty  
  :nth-child()  
  :nth-last-child()  
  :first-child :last-child : only-child  
  可用于动态数量匹配元素样式  
  - 逻辑型  
  :not伪类  
  :where :has  
  :not常用于重置CSS样式，如禁用按钮:hover样式不生效`.cs-button:not(:disabled):hover { background-color: #eee; }`  
  
- 伪元素
  - ::before  
  表示在元素内容之前插入一个虚拟的元素  
  - ::after  
  表示在元素内容之后插入,指定 content 属性才会生效,支持 content 为 counter、attr、url、字符
  - ::first-line  
  可对排版后显示的第一行指定文本样式
  - ::first-letter  
  可对排版后元素第一个字母指定文本样式

## 思考题

> 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？（提交至 GitHub）

- 元素排版完成后first-letter只修改第一个字母的布局样式，即时引起重排对页面整体布局重新计算消耗小，而first-line是对元素排版后的第一行匹配样式，若能设置float则重排消耗大，页面元素位置变动大，不同设备尺寸first-line影响的第一行包含内容也不一样，若是多个段落同时设置first-line float属性则页面内容位置跳动大，内存消耗大且展示效果不好
