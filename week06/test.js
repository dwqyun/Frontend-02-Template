/* 1.编写一个 match 函数。它接受两个参数，
第一个参数是一个选择器字符串性质，第二个是一个 HTML 元素。
这个元素你可以认为它一定会在一棵 DOM 树里面。通过选择器和 DOM 元素来判断，
当前的元素是否能够匹配到我们的选择器。（不能使用任何内置的浏览器的函数，
仅通过 DOM 的 parent 和 children 这些 API，
来判断一个元素是否能够跟一个选择器相匹配。）以下是一个调用的例子。 */
/**
 * 实现#id .class tag三类选择器匹配
 *
 * 1. 按空格分割，判断是否复合选择器
 * 2. 从右向左检查，是否匹配每一选择器
 *
 * @param {String} selector
 * @param {HTMLElement} element
 */
function match(selector, element) {
  if (!selector || !element) {
    return false;
  }

  const selectorParts = selector.split(' ');

  let curElement = element;

  for (i = selectorParts.length - 1; i >= 0; i--) {
    if (!check(selectorParts[i], curElement)) {
      return false;
    }

    curElement = curElement.parentNode;
  }

  return true;
}

function check(selector, element) {
  if (selector.charAt(0) === '#') {
    return checkID(selector, element);
  } else if (selector.charAt(0) === '.') {
    return checkClasses(selector, element);
  } else {
    return checkTagName(selector, element);
  }

  return false;
}

function checkID(selector, element) {
  const test = selector.match(/#([\w-]+)/);

  if (test && test[1] === element.id) {
    if (selector.includes('.')) {
      return checkClasses(selector, element);
    }

    return true;
  }
  return false;
}

function checkClasses(selector, element) {
  const test = selector.match(/\.([\w-]+)/g);

  if (test) {
    const classList = Array.from(element.classList);
    for (let i = 0; i < test.length; i++) {
      if (!classList.includes(test[i].replace('.', ''))) {
        return false;
      }
    }
    return true;
  }

  return false;
}

function checkTagName(selector, element) {
  const test = selector.match(/[a-zA-Z]+[^\.#]/);

  if (selector === '*') {
    return true;
  }

  if (test && test[0].toLowerCase() === element.tagName.toLowerCase()) {
    if (selector.includes('#')) {
      return checkID(selector, element);
    }

    if (selector.includes('.')) {
      return checkClasses(selector, element);
    }

    return true;
  }

  return false;
}

match('div #id.class', document.getElementById('id'));

/* 2.请写出下面选择器的优先级：
div#a.b .c[id=x] 0 1 3 1 #a:not(#b) 0 2 0 0 *.a 0 0 1 0 div.a 0 0 1 1 */
/* 
若取N为10有

div#a.b .c[id=x] => [0, 1, 3, 1]
S = 0 * (N**3) + 1*(N**2) + 3*(N**1) + 1 = 131

#a:not(#b) => [0, 2, 0, 0]
S = 0 * (N**3) + 2*(N**2) + 0*(N**1) + 0 = 200

*.a => [0, 0, 1, 0]
S = 0 * (N**3) + 0*(N**2) + 1*(N**1) + 0 = 10

div.a => [0, 0, 1, 1]
S = 0 * (N**3) + 0*(N**2) + 1*(N**1) + 1 = 11
 */