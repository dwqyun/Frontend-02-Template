import { Component, createElement } from './framework'

class Carousel extends Component {
  constructor() {
    super();
    this.attributes = Object.create(null);
  }
  setAttribute(name, value) {
    this.attributes[name] = value;
  }
  render() {
    // console.log(this.attributes);
    this.root = document.createElement('div');
    this.root.classList.add('carousel');
    for (const record of this.attributes.src) {
      let child = document.createElement('div');
      child.style.backgroundImage = `url(${record})`;
      this.root.appendChild(child);
    }

    /*     let currentIndex = 0;
        setInterval(() => {
          let children = this.root.children;
          // 取余 取1~n
          let nextIndex = (currentIndex + 1) % children.length;
          let current = children[currentIndex];
          let next = children[nextIndex];
    
          next.style.transition = "none";
          next.style.transform = `translateX${100 - nextIndex * 100}%`;
          setTimeout(() => {
            next.style.transition = "";
            current.style.transform = `translateX(-${-100 - currentIndex * 100}%)`;
            next.style.transform = `translateX(-${- nextIndex * 100}%)`;
            currentIndex = nextIndex;
          }, 16);
        }, 3000);
     */
    // 鼠标拖拽
    let position = 0;

    this.root.addEventListener("mousedown", event => {
      console.log("mousedown");
      let children = this.root.children;
      let startX = event.clientX;

      let move = event => {
        let x = event.clientX - startX;
        console.log("mousemove", x);

        let current = position - ((x - x % 500) / 500);

        for (let offset of [-1, 0, 1]) {
          let pos = current + offset;
          pos = (pos + children.length) % children.length;
          children[pos].style.transition = "none";
          children[pos].style.transform = `translateX(${- pos * 500 + offset * 500 + x % 500}px)`;
        }
      }

      let up = event => {
        console.log("mouseup");
        let x = event.clientX - startX;
        position = position - Math.round(x / 500);

        for (let offset of [0, - Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x))]) {
          let pos = position + offset;
          pos = (pos + children.length) % children.length;
          children[pos].style.transition = "";
          children[pos].style.transform = `translateX(${- pos * 500 + offset * 500}px)`;
        }

        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
      }

      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    })


    return this.root;
  }
  mountTo(parent) {
    parent.appendChild(this.render());
  }
}

let d = [
  'https://www.logosc.cn/uploads/resources/2018/11/28/1543384155.jpg',
  'https://www.logosc.cn/uploads/resources/2018/11/06/1541473181.jpg',
  'https://www.logosc.cn/uploads/resources/2018/11/24/1543046347.jpg',
  'https://www.logosc.cn/uploads/resources/2018/11/06/1541474302.jpg'
];
let a = <Carousel src={d} />;
a.mountTo(document.body);
