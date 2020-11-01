# 学习笔记

## 工具链

### 单元测试工具

- Mocha
  - npm 全局或项目局部安装依赖后，项目文件夹中`npm init`，可在`package.json`配置脚本`"scripts": {"test": "mocha"}`，`npm test`即可运行测试test目录下脚本
  - babel解决Mocha import/export 替代 require/module.exports，配置babel转换版本，package.json script脚本修改为`mocha --require @babel/register`

  ```npm
  npm install --global mocha
  npm install --save-dev mocha
  npm init
  npm i -D @babel/core @babel/register @babel/preset-env
  node ./node_modules/mocha/bin/mocha --require @babel/register
  npm test
  ``

- code coverage
  - 检测单元测试代码覆盖率，[需要对babel进行额外处理](https://www.npmjs.com/package/@istanbuljs/nyc-config-babel)，配置`babel-plugin-istanbul`和`.nycrc`，修改scripts为`"test": "mocha --require @babel/register","coverage": "nyc mocha"`，测试用例则执行`npm coverage`，写业务代码则`npm run test`

  ```npm
  npm i -D nyc
  npm i -D babel-plugin-istanbul @istanbuljs/nyc-config-babel
  npm run test
  npm run coverage
  ``

- 对html-parser进行单元测试
  - 对parser JS逻辑编写代码测试用例，覆盖必要分支逻辑

- 所有工具与generator的集成
  - 更新单元测试依赖到generator，更新template文件
