import { Component, createElement } from './framework'
import { Carousel } from '../../week15/jsx/carousel'
import { Button } from './Button.js'
import { List } from './List.js'

let d = [
  {
    img: "https://www.logosc.cn/uploads/resources/2018/11/28/1543384155.jpg",
    url: "https://horde.geekbang.org/",
  },
  {
    img: "https://www.logosc.cn/uploads/resources/2018/11/06/1541473181.jpg",
    url: "https://horde.geekbang.org/",
  },
  {
    img: "https://www.logosc.cn/uploads/resources/2018/11/24/1543046347.jpg",
    url: "https://horde.geekbang.org/",
  },
  {
    img: "https://www.logosc.cn/uploads/resources/2018/11/06/1541474302.jpg",
    url: "https://horde.geekbang.org/",
  },
];
let a = <Carousel
  src={d}
  onChange={event => console.log(event.detail.position)}
  onClick={event => window.location.href = event.detail.data.url}
/>;
/* let a = <List data={d}>
  {(record) =>
    <div>
      <img src={record.img} />
      <a href={record.url}></a>
    </div>
  }
</List> */
a.mountTo(document.body);

