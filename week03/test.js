// <!-- 练习：完成 StringToNumber 和 NumberToString 两个函数 -->

// 十进制 0|0.|.2|1e3
// 二进制 0b111
// 八进制 0o10
// 十六进制 0xFF

function stringToNumber(str) {
  if (str === null || str === (void 0)) {
    return Number.NaN;
  }

  str = str.toString;
  let numbers = new Map([
    ['0', 0],
    ['1', 1],
    ['2', 2],
    ['3', 3],
    ['4', 4],
    ['5', 5],
    ['6', 6],
    ['7', 7],
    ['8', 8],
    ['9', 9]
  ]);
  let radix = 10;
  let negative = false;
  let numberStr = str;
  let number = Number.NaN;
  // check number is negative or not?
  if (numberStr[0] === '-') {
    negative = true;
    number = str.slice(1);
  }

  if (numberStr[0] === '+') {
    negative = false;
    numberStr = str.slice(1);
  }

  if (numberStr.slice(0, 2) === '0b') {
    radix = 2;
    numbers = new Map([
      ['0', 0],
      ['1', 1]
    ]);
    numberStr = numberStr.slice(2);
  }

  if (numberStr.slice(0, 2) === '0o') {
    radix = 8;
    numbers = new Map([
      ['0', 0],
      ['1', 1],
      ['2', 2],
      ['3', 3],
      ['4', 4],
      ['5', 5],
      ['6', 6],
      ['7', 7],
      ['8', 8]
    ]);
    numberStr = numberStr.slice(2);
  }

  if (numberStr.slice(0, 2) === '0x') {
    radix = 16;
    numbers = new Map([
      ['0', 0],
      ['1', 1],
      ['2', 2],
      ['3', 3],
      ['4', 4],
      ['5', 5],
      ['6', 6],
      ['7', 7],
      ['8', 8],
      ['9', 9],
      ['A', 10],
      ['B', 11],
      ['C', 12],
      ['D', 13],
      ['E', 14],
      ['F', 15]
    ]);
    numberStr = numberStr.slice(2);
  }

  if (radix === 10) {
    // 处理科学及算法
    const scientificNumbers = numberStr.toUpperCase().split('E');
    if (scientificNumbers.length == 2) {
      number = scientificNumbers[0] * Math.pow(radix, scientificNumbers[1]);
      if (negative) {
        number = -Math.abs(number);
      }
      return number;
    }
  }
  const numberStr = numberStr.toUpperCase().split('.');
  number = numberStr[0].split('').reverse().reduce(
    (previous, current, index) => {
      if (!numbers.has(current)) {
        return Number.NaN;
      }
      return previous + numbers.get(current) * Math.pow(radix, index);
    }, 0
  )

  if (numberStr.length > 1) {
    number = numberStr[1].split('').reduce(
      (previous, current, index) => {
        if (!numbers.has(current)) {
          return Number.NaN;
        }
        return previous + numbers.get(current) * Math.pow(radix, -index - 1);
      }, number
    )
  }

  if (negative) {
    return number = -Math.abs(number);
  }
  return number;
}

console.log(stringToNumber(0.23));
console.log(stringToNumber(123.23));
console.log(stringToNumber(0b111));
console.log(stringToNumber(0o10));
console.log(stringToNumber(0xFF));

function NumberToString(number, radix) {
  if (Number.isNaN(number) || radix > 16) {
    return 'NaN';
  }
  let numbers = new Map([
    ['0', 0],
    ['1', 1],
    ['2', 2],
    ['3', 3],
    ['4', 4],
    ['5', 5],
    ['6', 6],
    ['7', 7],
    ['8', 8],
    ['9', 9],
    ['A', 10],
    ['B', 11],
    ['C', 12],
    ['D', 13],
    ['E', 14],
    ['F', 15]
  ]);
  let negative = false;
  if (number < 0) {
    negative = true;
  }
  let integerPart = Math.floor(Math.abs(number));
  let integerParts = [];
  let decimalPatr = Math.abs(number % 1);
  let decimalParts = [];
  if (decimalPart !== 0) {
    decimalParts = ['.'];
  }
  // 整数
  for (; ;) {
    const radixIntegerPart = integerPart % radix;
    if (!numbers.has(radixIntegerPart)) {
      return 'NaN';
    }
    integerParts.push(numbers.get(radixIntegerPart));
    integerPart = Math.floor(integerPart / radix);
    if (integerPart === 0) {
      break;
    }
  }
  // 小数
  for (; ;) {
    // 除不尽则取最大54精度
    if (decimalPatr === 0 || integerParts.length === 54) {
      break;
    }
    decimalPatr = decimalPatr * radix;
    const radixDecimalPart = Math.floor(decimalPatr);
    if (!numbers.has(radixDecimalPart)) {
      return 'NaN';
    }
    decimalParts.push(numbers.get(radixDecimalPart));
    decimalPatr = decimalPatr % 1;
  }

  let numberStr = integerParts.reverse().concat(decimalParts).join('');
  if (negative) {
    numberStr = '-' + numberStr;
  }

  return numberStr;
}

console.log(stringToNumber(123, 2));
console.log(stringToNumber(-123.123, 8));

/* 作业：尝试找出 JavaScript 引擎里面 Realm 所有的对象，使用一个 JS 数据可视化的框架去做一个可视化 */

// html部分: <div id="container" />
import G6 from "@antv/g6";
/* 作业：尝试找出 JavaScript 引擎里面 Realm 所有的对象，使用一个 JS 数据可视化的框架去做一个可视化 */
import G6 from "@antv/g6";

const COLLAPSE_ICON = function COLLAPSE_ICON(x, y, r) {
  return [
    ["M", x - r, y - r],
    ["a", r, r, 0, 1, 0, r * 2, 0],
    ["a", r, r, 0, 1, 0, -r * 2, 0],
    ["M", x + 2 - r, y - r],
    ["L", x + r - 2, y - r]
  ];
};
const EXPAND_ICON = function EXPAND_ICON(x, y, r) {
  return [
    ["M", x - r, y - r],
    ["a", r, r, 0, 1, 0, r * 2, 0],
    ["a", r, r, 0, 1, 0, -r * 2, 0],
    ["M", x + 2 - r, y - r],
    ["L", x + r - 2, y - r],
    ["M", x, y - 2 * r + 2],
    ["L", x, y - 2]
  ];
};
G6.registerNode(
  "tree-node",
  {
    drawShape: function drawShape(cfg, group) {
      const rect = group.addShape("rect", {
        attrs: {
          fill: "#fff",
          stroke: "#666"
        },
        name: "rect-shape"
      });
      const content = cfg.name.replace(/(.{19})/g, "$1\n");
      const text = group.addShape("text", {
        attrs: {
          text: content,
          x: 0,
          y: 0,
          textAlign: "left",
          textBaseline: "middle",
          fill: "#666"
        },
        name: "rect-shape"
      });
      const bbox = text.getBBox();
      const hasChildren = cfg.children && cfg.children.length > 0;
      if (hasChildren) {
        group.addShape("marker", {
          attrs: {
            x: bbox.maxX + 12,
            y: bbox.minX + bbox.height / 2,
            r: 6,
            symbol: cfg.collapsed ? EXPAND_ICON : COLLAPSE_ICON,
            stroke: "#666",
            lineWidth: 2
          },
          name: "collapse-icon"
        });
      }
      rect.attr({
        x: bbox.minX - 4,
        y: bbox.minY - 6,
        width: bbox.width + (hasChildren ? 26 : 8),
        height: bbox.height + 12
      });
      return rect;
    }
  },
  "single-node"
);

const width = document.getElementById("container").scrollWidth;
const height = document.getElementById("container").scrollHeight || 500;
const graph = new G6.TreeGraph({
  container: "container",
  width,
  height,
  modes: {
    default: [
      {
        type: "collapse-expand",
        onChange: function onChange(item, collapsed) {
          const data = item.get("model");
          const icon = item
            .get("group")
            .find(element => element.get("name") === "collapse-icon");
          if (collapsed) {
            icon.attr("symbol", EXPAND_ICON);
          } else {
            icon.attr("symbol", COLLAPSE_ICON);
          }
          data.collapsed = collapsed;
          return true;
        }
      },
      "drag-canvas",
      "zoom-canvas"
    ]
  },
  defaultNode: {
    type: "tree-node",
    anchorPoints: [[0, 0.5], [1, 0.5]]
  },
  defaultEdge: {
    type: "cubic-horizontal",
    style: {
      stroke: "#A3B1BF"
    }
  },
  layout: {
    type: "compactBox",
    direction: "LR",
    getId: function getId(d) {
      return d.id;
    },
    getHeight: function getHeight() {
      return 16;
    },
    getWidth: function getWidth() {
      return 16;
    },
    getVGap: function getVGap() {
      return 20;
    },
    getHGap: function getHGap() {
      return 80;
    }
  }
});
const data = {
  children: [
    {
      name: "eval"
    },
    {
      name: "isFinite"
    },
    {
      name: "isNaN"
    },
    {
      name: "parseFloat"
    },
    {
      name: "parseInt"
    },
    {
      name: "decodeURI"
    },
    {
      name: "decodeURIComponent"
    },
    {
      name: "encodeURI"
    },
    {
      name: "encodeURIComponent"
    },
    {
      name: "Array"
    },
    {
      name: "Date"
    },
    {
      name: "RegExp"
    },
    {
      name: "Promise"
    },
    {
      name: "Proxy"
    },
    {
      name: "Map"
    },
    {
      name: "WeakMap"
    },
    {
      name: "Set"
    },
    {
      name: "WeakSet"
    },
    {
      name: "Function"
    },
    {
      name: "Boolean"
    },
    {
      name: "String"
    },
    {
      name: "Number"
    },
    {
      name: "Symbol"
    },
    {
      name: "Object"
    },
    {
      name: "Error"
    },
    {
      name: "EvalError"
    },
    {
      name: "RangeError"
    },
    {
      name: "ReferenceError"
    },
    {
      name: "SyntaxError"
    },
    {
      name: "TypeError"
    },
    {
      name: "URIError"
    },
    {
      name: "ArrayBuffer"
    },
    {
      name: "SharedArrayBuffer"
    },
    {
      name: "DataView"
    },
    {
      name: "Float32Array"
    },
    {
      name: "Float64Array"
    },
    {
      name: "Int8Array"
    },
    {
      name: "Int16Array"
    },
    {
      name: "Int32Array"
    },
    {
      name: "Uint8Array"
    },
    {
      name: "Uint16Array"
    },
    {
      name: "Uint32Array"
    },
    {
      name: "Uint8ClampedArray"
    },
    {
      name: "Atomics"
    },
    {
      name: "JSON"
    },
    {
      name: "Math"
    },
    {
      name: "Reflect"
    }
  ],
  name: "Realm"
};
G6.Util.traverseTree(data, function (item) {
  item.id = item.name;
});
graph.data(data);
graph.render();
graph.fitView();