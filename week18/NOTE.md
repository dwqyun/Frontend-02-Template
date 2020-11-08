# 学习笔记

## 发布系统

### 实现一个线上Web服务

- 初始化server
  - 使用Oracle VM VirtualBox 安装Ubuntu 虚拟机系统，再安装nodejs、npm

  ```bash
  sudo apt install nodejs
  sudo apt install npm
  sudo npm install -g n
  sudo n latest
  PATH="$PATH"
  node --version
  ```

- 利用Express编写服务器
  - 安装Express，移除router和view文件
  - VM设置网络-添加端口转发8022-22及8080-3000，scp命令拷贝文件到虚拟机，虚拟机启动express本地使用localhost:8080访问

  ```bash
  npm install express-generator -g
  npx express-generator
  npm install
  service ssh start
  scp -P 8022 -r ./* dwqyun@127.0.0.1:/home/dwqyun/server
  cd server
  npm start&
  ```

### 实现一个发布系统

- 用node启动一个简单的server
  - 引入 http 编写 createServer方法监听8082端口，node ./server.js启动
- 编写简单的发送请求功能
  - 引入http，创建request为localhost:8080实例，end结束请求，node ./publish.js启动
- 简单了解Node.js的流
  - [流](http://nodejs.cn/api/stream.html)分Writable、Readable、Duplex、Transform，HTTP请求是可读可写流，使用fs模块读取package.json流式内容类型写入到request，服务端读取request
- 改造server
  - 客户端读取publishHTML模板文件，服务端写入HTML文件到server目录，本地localhost:3000/测试访问，将服务端代码发布到虚拟机，虚拟机添加8882-8082端口转发，
- 实现多文件发布
  - 多文件发布需要压缩archiver和解压unzipper模块，客户端archive.pipe(request)请求携带压缩包到服务端request.pipe(unzipper.Extract{})
- 用GitHub oAuth做一个登录实例
  - 配置 GitHub Apps 生成Client ID和Client secrets，打开github认证页面后，服务端检测为auth路由则接收client_id及存在服务端的client_secret获取token，生成带token的发布链接，客户端创建server接收token执行发布，服务端用token获取用户信息检查权限后接受发布
