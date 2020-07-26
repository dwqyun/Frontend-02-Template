/* 在一个字符串中，找到字符”a” */

const queryChar = (str, char = 'a') => {
  if (typeof str === 'string') {
    for (const char of str) {
      if (char === 'a') {
        return true
      }
    }
    return false;
  }
  throw TypeError('str is not a string');
}

/* 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“ab” */
const queryChar = (str) => {
  let isMatchA = false;
  for (const char of str) {
    if (char === 'a') {
      isMatchA = true
    }
    else if (isMatchA && char === 'b') {
      return true
    }
    else {
      isMatchA = false;
    }
  }
  return false;
}
queryChar('i acbm groot');

/* 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“abcdef” */
const queryChar = (str) => {
  let isMatchA = false;
  let isMatchB = false;
  let isMatchC = false;
  let isMatchD = false;
  let isMatchE = false;
  for (const char of str) {
    if (char === 'a') {
      isMatchA = true;
    }
    else if (isMatchA && char === 'b') {
      isMatchB = true;
    }
    else if (isMatchB && char === 'c') {
      isMatchC = true;
    }
    else if (isMatchC && char === 'd') {
      isMatchD = true;
    }
    else if (isMatchD && char === 'e') {
      isMatchE = true;
    }
    else if (isMatchE && char === 'f') {
      return true;
    }
    else {
      isMatchA = false;
      isMatchB = false;
      isMatchC = false;
      isMatchD = false;
      isMatchE = false;
    }
  }
  return false;
}
queryChar('i acbmabcdef groot');

/* 用状态机实现：字符串“abcabx”的解析 */
function match(string) {
  let state = start;
  for (const char of string) {
    debugger
    state = state(char);
  }

  return state === end;
}

function start(char) {
  return char === 'a' ? foundA : start;
}
function end(char) {
  return end;
}
function foundA(char) {
  return char === 'b' ? foundB : start(char);
}
function foundB(char) {
  return char === 'c' ? foundC : start(char);
}
function foundC(char) {
  return char === 'a' ? foundA2 : start(char);
}
function foundA2(char) {
  return char === 'b' ? foundB2 : start(char);
}
function foundB2(char) {
  return char === 'x' ? end : foundB(char);
}
match('abcyabcabx');

/* 作业：使用状态机完成”abababx”的处理。 */
function match(string) {
  let state = start;
  for (const char of string) {
    state = state(char);
    console.log({ state: state.name });
  }

  return state === end;
}

function start(char) {
  return char === 'a' ? foundA : start;
}
function end(char) {
  return end;
}
function foundA(char) {
  return char === 'b' ? foundB : start(char);
}
function foundB(char) {
  return char === 'a' ? foundA2 : start(char);
}
function foundA2(char) {
  return char === 'b' ? foundB2 : start(char);
}
function foundB2(char) {
  return char === 'a' ? foundA3 : start(char);
}
function foundA3(char) {
  return char === 'b' ? foundB3 : start(char);
}
function foundB3(char) {
  return char === 'x' ? end : foundA3(char);
}
match('abababcyabcabababx');

/* 可选作业：我们如何用状态机处理完全未知的 pattern？ （参考资料：字符串 KMP 算法 https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm） */

/* 移动位数 = 已匹配的字符数 - 对应的部分匹配值 */
function match(string, pattern) {
  const strLen = string.length;
  const patLen = pattern.length;

  const next = (() => {
    let next = [-1];
    let k = -1;
    let j = 0;
    while (j < patLen - 1) {
      if (k === -1 || pattern[j] === pattern[k]) {
        k++;
        j++;
        if (pattern[j] !== pattern[k]) {
          next[j] = k;
        }
        else {
          next[j] = next[k];
        }
      }
      else {
        k = next[k];
      }
    }
    return next;
  })();
  let i = 0;
  let j = 0;
  while (i < strLen && j < patLen) {
    if (j === -1 || string[i] === pattern[j]) {
      i++;
      j++;
    }
    else {
      j = next[j];
      if (i === strLen - 1) {
        i++;
      }
    }
  }
  return j === patLen ? i - j : -1;
}
match('stringgogostrgo', 'strgo');