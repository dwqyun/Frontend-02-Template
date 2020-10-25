# 学习笔记

### 初始化与构建

- 初始化工具Yeoman
  - 脚手架生成器 [yeoman](https://yeoman.io/authoring/)，`npm init` + `npm install -g yo && npm install --save yeoman-generator` + `npm link` + `yo toolchain`
  - class Generator 中的方法支持同步和异步执行，`this.prompt`和`this.log`用于用户输入和输出，`this.fs.copyTpl`支持将用户输入注入到template生成目标文件，`this.fs.extendJSON`和`this.npmInstall|yarnInstall`将指定的package.json输出目标文件并安装依赖
  - 生成简单的vue脚手架

- webpack基本知识
  - 全局安装可使用webpack命令，项目局部安装使用 npx webpack
  - 核心是loader为文本转换函数，plugin则作用于构建过程提供环境变量、资源优化...

```npm
npm install webpack webpack-cli --save-dev
```

- Babel基本知识
  - 用于转译JS语法，全局安装可直接使用babel命令
  - 在babel.config.json配置文件中配置presets

```npm
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```
