let currentToken = null;  // tag 不管有多复杂 是当做一个token去处理的
let currentAttribute = null;
let currentTextNode = null;
let stack = [{ type: "document", children: [] }]
const EOF = Symbol("EOF");

function emit(token) {

  let top = stack[stack.length - 1]

  if (token.type == "startTag") {
    let element = {
      type: "element",
      children: [],
      attributes: []
    }

    element.tagName = token.tagName

    for (let p in token) {
      if (p != "type" && p != "tagName") {
        element.attributes.push({
          name: p,
          value: token[p]
        })
      }
    }

    top.children.push(element)
    element.parent = top

    if (!token.isSelfClosing)
      stack.push(element)

    // console.log('push', element)
    currentTextNode = null;
  } else if (token.type == "endTag") {
    if (top.tagName != token.tagName) {
      throw new Error("Tag start end doesn't match")
    }
    currentTextNode = null;
  } else if (token.type == "text") {
    if (currentTextNode == null) {
      currentTextNode = {
        type: "text",
        content: ""
      }
      top.children.push(currentTextNode)
    }
    currentTextNode.content += token.content
  }
}

// 1. 开始标签
// 2. 结束标签
// 3. 自封闭标签
function data(char) {
  if (char == "<") {
    return tagOpen
  } else if (char == EOF) {
    emit({
      type: "EOF"
    })
    return
  } else {
    emit({
      type: "text",
      content: char
    })
    return data;
  }
}

function tagOpen(char) {
  if (char == "/") {  // 结束标签
    return endTagOpen
  } else if (char.match(/^[a-zA-Z]$/)) {  // 开始标签
    currentToken = {
      type: "startTag",
      tagName: ""
    }
    return tagName(char)
  } else {
    emit({
      type: "text",
      content: char,
    })
    return data
  }
}

function endTagOpen(char) {
  if (char.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: "endTag",
      tagName: ""
    }
    return tagName(char)
  } 
  // else if (char == ">") {

  // } else if (char == EOF) {

  // }
}

function tagName(char) {
  if (char.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (char == '/') {
    return selfClosingStartTag
  } else if (char.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += char.toLowerCase()
    return tagName
  } else if (char == ">") {
    emit(currentToken);
    return data
  } else {
    currentToken.tagName += char.toLowerCase()
    return tagName
  }
}

function beforeAttributeName(char) {
  if (char.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (char == ">" || char == "/" || char == EOF) {
    return afterAttributeName(char)
  } else if (char == "=") {
  } else {
    currentAttribute = {
      name: "",
      value: ""
    }
    return attributeName(char)
  }
}

function attributeName(char) {
  if (char.match(/^[\t\n\f ]$/) || char == "/" || char == ">" || char == EOF) {
    return afterAttributeName(char)
  } else if (char == "=") {
    return beforeAttributeValue
  } else if (char == "\u0000") {
    // return data
  } else if (char == "\"" || char == "\'" || char == "<") {

  } else {
    currentAttribute.name += char
    return attributeName
  }
}

function beforeAttributeValue(char) {
  if (char.match(/^[\t\n\f ]$/) || char == "/" || char == ">" || char == EOF) {
    return beforeAttributeValue
  } else if (char == "\"") {
    return doubleQuotedAttributeValue
  } else if (char == "\'") {
    return singleQuotedAttributeValue
  } else if (char == ">") {
    // return data
  } else {
    return UnquotedAttributeValue(char)
  }
}
function doubleQuotedAttributeValue(char) {
  if (char == "\"") {
    currentToken[currentAttribute.name] = currentAttribute.value
    return afterQuotedAttributeValue
  } else if (char == "\u0000") {
    // return data
  } else if (char == EOF) {
    // return data
  } else {
    currentAttribute.value += char
    return doubleQuotedAttributeValue
  }
}

function afterQuotedAttributeValue(char) {
  if (char.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (char == "/") {
    return selfClosingStartTag
  } else if (char == ">") {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (char == EOF) {
    // return data
  } else {
    throw new Error('unexpected charater \"' + char + '\"')
  }
}

function singleQuotedAttributeValue(char) {
  if (char == "\'") {
    currentToken[currentAttribute.name] = currentAttribute.value
    return afterQuotedAttributeValue
  } else if (char == "\u0000") {
    // return data
  } else if (char == EOF) {
    // return data
  } else {
    currentAttribute.value += char
    return singleQuotedAttributeValue
  }
}
function UnquotedAttributeValue(char) {
  if (char.match(/^[\t\n\f ]$/)) {
    currentToken[currentAttribute.name] = currentAttribute.value
    return beforeAttributeName
  } else if (char == "/") {
    currentToken[currentAttribute.name] = currentAttribute.value
    return selfClosingStartTag
  } else if (char == ">") {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (char == "\u0000") {
    // return data
  } else if (char == "\"" || char == "\'" || char == "<" || char == "=" || char == "`") {
    // return data
  } else if (char == EOF) {
    // return data
  } else {
    currentAttribute.value += char
    return UnquotedAttributeValue
  }
}
function afterAttributeName(char) {
  if (char.match(/^[\t\n\f ]$/)) {
    return afterAttributeName
  } else if (char == "/") {
    return selfClosingStartTag
  } else if (char == "=") {
    return beforeAttributeValue
  } else if (char == ">") {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (char == EOF) {

  } else {
    currentToken[currentAttribute.name] = currentAttribute.value
    currentAttribute = {
      name: '',
      value: ''
    }
    return attributeName(char)
  }
}

function selfClosingStartTag(char) {
  if (char == ">" || char == "/") {
    currentToken.isSelfClosing = true
    emit(currentToken)
    return data
  }
  // else if (char == "EOF") {
  //   // return data
  // } else {
  //   // return data
  // }
}

export function parseHTML(html) {
  // 重置
  stack = [{ type: 'document', children: [] }];
  currentToken = null;
  currentAttribute = null;
  currentTextNode = null;

  let state = data;
  for (let char of html) {
    state = state(char);
  }
  state = state(EOF);
  return stack[0];
}