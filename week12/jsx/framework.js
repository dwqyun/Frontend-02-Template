export function createElement(type, attributes, ...children) {
  let element = null;
  if (typeof type === 'string') {
    element = new ElementWrapper(type);
  }
  else {
    // 生成自定义标签实例
    element = new type;
  }

  for (const name in attributes) {
    if (attributes.hasOwnProperty(name)) {
      element.setAttribute(name, attributes[name])
    }
  }

  for (let child of children) {
    if (typeof child === 'string') {
      child = new TextWrapper(child);
    }
    element.appendChild(child);
  }
  return element;
}

export class Component {
  constructor(type) {
    // this.root = this.render();
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(child) {
    child.mountTo(this.root);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

class ElementWrapper extends Component {
  constructor(type) {
    this.root = document.createElement(type);
  }
}

class TextWrapper extends Component {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}