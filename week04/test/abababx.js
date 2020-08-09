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

function match(str) {
  let state = start;
  for (let i of str) {
    state = state(i);
  }
  return state === end;
}

function start(c) {
  if (c === "a") {
    return foundA;
  }
  return start;
}

function end() {
  return end;
}

function foundA(c) {
  if (c === "b") {
    return foundB;
  }
  return start(c);
}

function foundB(c) {
  if (c === "a") {
    return foundA2;
  }
  return start(c);
}

function foundA2(c) {
  if (c === "b") {
    return foundB2;
  }
  return start(c);
}

function foundB2(c) {
  if (c === "a") {
    return foundA3;
  }
  return start(c);
}
function foundA3(c) {
  if (c === "b") {
    return foundB3;
  }
  return start(c);
}
function foundB3(c) {
  if (c === "x") {
    return end;
  }
  return foundB(c);
}

console.log(match("abababababxgo"));

function match(str) {
  let state = start;
  for (let i of str) {
    state = state(i);
  }
  return state === end;
}

function start(c) {
  if (c === "a") {
    return foundA;
  }
  return start;
}

function end() {
  return end;
}

function foundA(c) {
  if (c === "b") {
    return foundB;
  }
  return start(c);
}

function foundB(c) {
  if (c === "a") {
    return foundA2;
  }
  return start(c);
}

function foundA2(c) {
  if (c === "b") {
    return foundB2;
  }
  return start(c);
}

function foundB2(c) {
  if (c === "a") {
    return foundA3;
  }
  return start(c);
}
function foundA3(c) {
  if (c === "b") {
    return foundB3;
  }
  return start(c);
}
function foundB3(c) {
  if (c === "x") {
    return end;
  }
  return foundB(c);
}

console.log(match("abababababxgo"));

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