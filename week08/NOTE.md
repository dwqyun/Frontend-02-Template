# 学习笔记

## 重学HTML、浏览器API

### 重学HTML

- HTML的定义:XML与SGML
  实体定义，`&nbsp &lt &gt &amp &quot`
- HTML标签语义
  语义化标签适用的场景：机器阅读的结构、SEO及自然语言表达能力的补充，使用语义化标签难点在于大多页面元素难以界定使用哪一语义标签，且语义标签通常自带样式还需要覆盖默认样式，尽可能只使用熟悉的语义标签，在确切的场景引入避免语义标签的滥用，像wiki这类文档型文章的页面才会大规模使用语义标签，对于富文本、Markdown等HTML编辑器则会使用符合表现的语义标签  

> 参考[HTML5 标签列表](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)  

| 标签              | 描述                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| *根元素*          |
| html              | 代表 HTML 或 XHTML 文档的根                                                                             |
| *文档元数据*      |
| head              | 代表关于文档元数据的一个集合，包括脚本或样式表的链接或内容                                              |
| title             | 定义文档的标题，将显示在浏览器的标题栏或标签页上。该元素只能包含文本，包含的标签不会被解释              |
| base              | 定义页面上相对 URL 的基准 URL                                                                           |
| link              | 用于链接外部资源到该文档                                                                                |
| meta              | 定义其他 HTML 元素无法描述的元数据                                                                      |
| style             | 用于内联 CSS                                                                                            |
| *脚本*            |
| script            | 定义一个内联脚本或链接到外部脚本，脚本语言是 JavaScript                                                 |
| noscript          | 定义当浏览器不支持脚本时显示的替代文字                                                                  |
| template          | 通过 JavaScript 在运行时实例化内容的容器                                                                |
| *章节*            |
| body              | 代表 HTML 文档的内容，在文档中只能有一个 body 元素                                                      |
| section           | 定义文档中的一个章节                                                                                    |
| nav               | 定义只包含导航链接的章节                                                                                |
| article           | 定义只包含导航链接的章节                                                                                |
| aside             | 定义和页面内容关联度较低的内容——如果被删除，剩下的内容仍然很合理                                        |
| h1,h2,h3,h4,h5,h6 | 标题元素实现了六层文档标题，h1 是最大的标题，h6 是最小的标题，标题元素简要地描述章节的主题              |
| header            | 定义页面或章节的头部，它经常包含 logo、页面标题和导航性的目录                                           |
| footer            | 定义页面或章节的尾部，它经常包含版权信息、法律信息链接和反馈建议用的地址                                |
| address           | 定义包含联系信息的一个章节                                                                              |
| main              | 定义文档中主要或重要的内                                                                                |
| *组织内容*        |
| p                 | 定义一个段落                                                                                            |
| hr                | 代表章节、文章或其他长内容中段落之间的分隔符                                                            |
| pre               | 代表其内容已经预先排版过，格式应当保留                                                                  |
| blockquote        | 代表引用自其他来源的内容                                                                                |
| ol                | 定义一个有序列表                                                                                        |
| ul                | 定义一个无序列表                                                                                        |
| li                | 定义列表中的一个列表项                                                                                  |
| dl                | 定义一个定义列表（一系列术语和其定义）                                                                  |
| dt                | 代表一个由下一个 dd 定义的术语                                                                          |
| dd                | 代表出现在它之前术语的定义                                                                              |
| figure            | 代表一个和文档有关的图例                                                                                |
| figcaption        | 代表一个图例的说明                                                                                      |
| div               | 代表一个通用的容器，没有特殊含义                                                                        |
| *文字形式*        |
| a                 | 代表一个链接到其他资源的超链接                                                                          |
| em                | 代表强调 文字                                                                                           |
| strong            | 代表特别重要 文字                                                                                       |
| small             | 代表注释 ，如免责声明、版权声明等，对理解文档不重要                                                     |
| s                 | 代表不准确或不相关 的内容                                                                               |
| cite              | 代表作品标题                                                                                            |
| q                 | 代表内联的引用                                                                                          |
| dfn               | 代表一个术语包含在其最近祖先内容中的定义                                                                |
| abbr              | 代表省略 或缩写 ，其完整内容在 title 属性中                                                             |
| data              | 关联一个内容的机器可读的等价形式 （该元素只在 WHATWG 版本的 HTML 标准中，不在 W3C 版本的 HTML5 标准中） |
| time              | 代表日期 和时间 值；机器可读的等价形式通过 datetime 属性指定                                            |
| code              | 代表计算机代码                                                                                          |
| var               | 代表代码中的变量                                                                                        |
| samp              | 代表程序或电脑的输出                                                                                    |
| kbd               | 代表用户输入 ，一般从键盘输出，但也可以代表其他输入，如语音输入                                         |
| sub,sup           | 分别代表下标 和上标                                                                                     |
| i                 | 代表一段不同性质 的文字，如技术术语、外文短语等                                                         |
| b                 | 代表一段需要被关注 的文字                                                                               |
| u                 | 代表一段需要下划线呈现的文本注释，如标记出拼写错误的文字等                                              |
| mark              | 代表一段需要被高亮的引用 文字                                                                           |
| ruby              | 代表被ruby 注释 标记的文本，如中文汉字和它的拼音                                                        |
| rt                | 代表ruby 注释 ，如中文拼音                                                                              |
| rp                | 代表 ruby 注释两边的额外插入文本 ，用于在不支持 ruby 注释显示的浏览器中提供友好的注释显示               |
| bdi               | 代表需要脱离 父元素文本方向的一段文本。它允许嵌入一段不同或未知文本方向格式的文本                       |
| bdo               | 指定子元素的文本方向 ，显式地覆盖默认的文本方向                                                         |
| span              | 代表一段没有特殊含义的文本，当其他语义元素都不适合文本时候可以使用该元素                                |
| br                | 代表换行                                                                                                |
| wbr               | 代表建议换行 (Word Break Opportunity) ，当文本太长需要换行时将会在此处添加换行符                        |
| ins               | 定义增加 到文档的内容                                                                                   |
| del               | 定义从文档移除 的内容                                                                                   |
| 嵌入内容          |
| img               | 代表一张图片                                                                                            |
| iframe            | 代表一个内联的框架                                                                                      |
| embed             | 代表一个嵌入 的外部资源，如应用程序或交互内容                                                           |
| object            | 代表一个外部资源 ，如图片、HTML 子文档、插件等                                                          |
| param             | 代表 object 元素所指定的插件的参数                                                                      |
| video             | 代表一段视频 及其视频文件和字幕，并提供了播放视频的用户界面                                             |
| audio             | 代表一段声音 ，或音频流                                                                                 |
| source            | 为 picture, audio 或者 video 元素指定多个媒体资源                                                       |
| track             | 为 video 或 audio 这类媒体元素指定文本轨道（字幕）                                                      |
| canvas            | 代表位图区域 ，可以通过脚本在它上面实时呈现图形，如图表、游戏绘图等                                     |
| map               | 与 area 元素共同定义图像映射 区域                                                                       |
| area              | 与 map 元素共同定义图像映射 区域                                                                        |
| svg               | 定义一个嵌入式矢量图                                                                                    |
| math              | 定义一段数学公式                                                                                        |
| 表格              |
| table             | 定义多维数据                                                                                            |
| caption           | 代表表格的标题                                                                                          |
| colgroup          | 代表表格中一组单列或多列                                                                                |
| col               | 代表表格中的列                                                                                          |
| tbody             | 代表表格中一块具体数据 （表格主体）                                                                     |
| thead             | 代表表格中一块列标签 （表头 ）                                                                          |
| tfoot             | 代表表格中一块列摘要 （表尾）                                                                           |
| tr                | 代表表格中的行                                                                                          |
| td                | 代表表格中的单元格                                                                                      |
| th                | 代表表格中的头部单元格                                                                                  |
| 表单              |
| form              | 代表一个表单 ，由控件组成                                                                               |
| fieldset          | 代表控件组，对表单元素进行分组                                                                          |
| legend            | 代表 fieldset 控件组的标题                                                                              |
| label             | 代表表单控件的标题                                                                                      |
| input             | 代表允许用户编辑数据的数据区 （文本框、单选框、复选框等）                                               |
| button            | 代表按钮                                                                                                |
| select            | 代表下拉框                                                                                              |
| datalist          | 代表提供给其他控件的一组预定义选项                                                                      |
| optgroup          | 代表一个选项分组                                                                                        |
| option            | 代表一个 select 元素或 datalist 元素中的一个选项                                                        |
| textarea          | 代表多行文本框                                                                                          |
| output            | 代表计算值                                                                                              |
| progress          | 代表进度条                                                                                              |
| meter             | 代表滑动条，显示已知范围的标量值或者分数值                                                              |
| 交互元素          |
| details           | 代表一个用户可以(点击)获取额外信息或控件的小部件，仅在被切换成展开状态时，它才会显示summary内含的信息   |
| summary           | 代表 details 元素的综述 或标题                                                                          |

- HTML语法

### 浏览器API

- DOM API
  - Node
    - parentNode
    - childNodes
    - firstChild
    - lastChild
    - nextSibling
    - previousSibling
  - Element
    - parentElement
    - children
    - firstElementChild
    - lastElementChild
    - nextElementSibling
    - previousElementSibling
  - DOM修改操作
    - appendChild
    - insertBefore
    - removeChild
    - replaceChild
  - 高级操作
  - compareDocumentPosition 是一个用于比较两个节点中关系的函数
  - contains 检查一个节点是否包含另一个节点的函数
  - isEqualNode 检查两个节点是否完全相同。
  - isSameNode 检查两个节点是否是同一个节点，实际上在 JavaScript 中可以用`===`
  - cloneNode 复制一个节点，如果传入参数 true，则会连同子元素 做深拷贝。
- 事件API
  - 先捕获再冒泡
  - 语法target.addEventListener(type, listener, options);target.addEventListener(type, listener, useCapture);
  - removeEventListener，提供调用addEventListener()一致参数, 以移除监听事件
- Range API
  获取选择器区域内的元素可以使用getSetSelection，fragment是用于更新和移动节点的文档片段，文档片段附加是是添加片段的子节点，只访问一次实时的DOM和触发一次重排

> var range = new Range()  
> range.setStart(element, 9)
> range.setEnd(element, 4)  
> var range = document.getSetSelection().getRangeAt(0)  
> range.setStartBefore  
> range.setEndBefore  
> range.setStartAfter  
> range.setEndAfter  
> range.selectNode  
> range.selectNodeContents  
> var fragment = range.extractContents()  
> range.insertNode(document.createTextNode("aaa"))  

- CSSOM
  - document.styleSheets，styleSheets.insertRule|removeRule
  - window.getComputedStyle(elt, pseudoElt)
- CSSOM View
  - window.innerHeight, window.innerWidth
  - window.outerWidth, window.outerHeight
  - window.devicePixelRatio
  - window.screen
    - window.screen.width
    - window.screen.height
    - window.screen.availWidth
    - window.screen.availHeight
  - window.open("about:blank", "_blank" ,"width=100,height=100,left=100,right=100" )
    - moveTo(x, y)
    - moveBy(x, y)
    - resizeTo(x, y)
    - resizeBy(x, y)
  - scroll
    - scrollLeft
    - scrollWidth
    - scrollHeight
    - scroll(x, y)
    - scrollBy(x, y)
    - scrollIntoView()
    - scrollX
    - scrollY
    - scroll(x, y)
    - scrollBy(x, y)
  - getClientRects
  - getBoundingClientRect
- 其他API
  - 从标准中寻找，khronos:WebGL、ECMA:ECMAScript、WHATWG:HTML、W3C:webbaudio、CG/WG，重点查看WHATWG标准
