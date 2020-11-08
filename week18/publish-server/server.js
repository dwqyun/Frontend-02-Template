
// 4
/* 
let http = require('http');

http.createServer(function (req, res) {
  console.log(req);
  res.end('hello world');
}).listen(8002);
*/

// 6
/* let http = require('http');

http.createServer(function (req, res) {
  console.log(req.headers);
  req.on('data', chunk => {
    console.log(chunk.toString())
  })
  req.on('end', chunk => {
    res.end('Success');
  })
}).listen(8002); */

// 7
/* let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {
  console.log(req.headers);
  let outFile = fs.createWriteStream('../server/public/index.html');
  
  req.on('data', chunk => {
    outFile.write(chunk)
  })
  req.on('end', chunk => {
    outFile.end();
    res.end('Success');
  })
}).listen(8082); */

// 8
/* let http = require('http');
let unzipper = require('unzipper');
http.createServer(function (req, res) {

  console.log(req.headers);
  // let outFile = fs.createWriteStream('../server/public/index.html');
  // let outFile = fs.createWriteStream('../server/public/tmp.zip');

  req.pipe(unzipper.Extract({ path: '../server/public/' }));
  req.on('end', () => {
    res.end('Success');
  })
}).listen(8082); */

// 9
let http = require('http');
let https = require('https');
let unzipper = require('unzipper');
let querystring = require('querystring');

// 2 auth路由：接收code，用code + client_id + client_secret获取token

function auth(request, response) {
  let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
  getToken(query.code, function (info) {
    console.log(info);
    response.write(`<a href='http://localhost:8083/?token=${info.access_token}'>publish</a>`);
    response.end();
  });
}

function getToken(code, callback) {
  let request = https.request({
    hostname: "github.com",
    path: `/login/oauth/access_token?code=${code}&client_id=Iv1.317364ab66a8590c&client_secret=b8c9a16a364685a4c84cc9f7a0ba443bf8f87728`,
    port: 443,
    method: "POST"
  }, function (response) {
    let body = ''
    response.on('data', chunk => {
      body += (chunk.toString());
    })
    response.on('end', chunk => {
      callback(querystring.parse(body));
    })
  });
  request.end();
}

// 4 用token获取用户信息，检查权限，接受发布

function publish(request, response) {

  let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);

  getUser(query.token, info => {
    console.log({info});
    if (info.login === 'dwqyun') {
      request.pipe(unzipper.Extract({ path: '../server/public/' }));
      request.on('end', function () {
        response.end('success!');
      })
    }
  });

}

function getUser(token, callback) {
  let request = https.request({
    hostname: "api.github.com",
    path: `/user`,
    port: 443,
    method: "GET",
    headers: {
      Authorization: `token ${token}`,
      "User-Agent": 'dwqyun-toy-publish'
    }
  }, function (response) {
    let body = ''
    response.on('data', chunk => {
      body += chunk.toString();
    })
    response.on('end', chunk => {
      callback(JSON.parse(body));
    })
  });
  request.end();
}

http.createServer(function (request, response) {
  if (request.url.match(/^\/auth\?/)) {
    return auth(request, response);
  }
  if (request.url.match(/^\/publish\?/)) {
    return publish(request, response);
  }
}).listen(8082);