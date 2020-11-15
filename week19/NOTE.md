# 学习笔记

## 发布系统

### 持续集成

- 发布前检查的相关知识
  - Git Hooks完成检查时机，ESLint完成轻量级代码风格检查，无头浏览器检查生成的DOM
- Git Hooks基本用法
  - `./git/hooks/`下文件去除`.sample`则生效嘛，如`pre-commit`，修改shell脚本为node执行环境
- ESLint基本用法
  - `npm i -S eslint` + `npx eslint --init`初始化eslint
- ESLint API 及其高级用法
  - 使用ESLint API编写pre-commit hooks，使用git stash使eslint只检查commit的代码
- 使用无头浏览器检查DOM
  - Chrome Headless + puppeteer， `npm i puppeteer & node ./main.js`，放到客户端用于辅助开开发，服务端则是强制标准
