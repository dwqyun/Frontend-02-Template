
// 5
/*
let http = require('http');

let request = http.request({
  hostname: '127.0.0.1',
  port: 8002
}, response => {
  console.log(response)
});

request.end();
 */

// 6
/* let http = require('http');
let fs = require('fs');


let request = http.request({
  hostname: '127.0.0.1',
  port: 8002,
  method: 'POST',
  headers: {
    'Content-Type': 'application/octet-stream'
  }
}, response => {
  console.log(response)
});

let file = fs.createReadStream('./package.json');
file.on('data', chunk => {
  console.log(chunk.toString());
  request.write(chunk);
});
file.on('end', chunk => {
  console.log('red finished');
  request.end(chunk);
});
 */

// 7
/* let http = require('http');
let fs = require('fs');


let request = http.request({
  hostname: '127.0.0.1',
  port: 8882,
  method: 'POST',
  headers: {
    'Content-Type': 'application/octet-stream'
  }
}, response => {
  console.log(response)
});

let file = fs.createReadStream('./sample/sample.html');
file.on('data', chunk => {
  console.log(chunk.toString());
  request.write(chunk);
});
file.on('end', chunk => {
  console.log('red finished');
  request.end(chunk);
});
 */

// 8
/* let http = require('http');
let fs = require('fs');
let archiver = require('archiver');

// fs.stat('./sample/sample.html', (err, stats) => {
//   let request = http.request({
//     hostname: '127.0.0.1',
//     port: 8882,
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/octet-stream',
//       'Content-length': stats.size
//     }
//   }, response => {
//     console.log(response)
//   });

//   let file = fs.createReadStream('./sample/sample.html');
//   file.pipe(request);
//   file.on('end', () => request.end());
// })
let request = http.request({
  hostname: '127.0.0.1',
  port: 8882,
  method: 'POST',
  headers: {
    'Content-Type': 'application/octet-stream'
  }
}, response => {
  console.log(response)
});

const archive = archiver('zip', {
  zlib: {
    level: 9
  }
})
archive.directory('./sample/', false);
archive.finalize();
archive.pipe(request); */

// 9
let http = require('http');
let archiver = require('archiver');
let child_process = require('child_process');
let querystring = require('querystring');

// 1 打开 https://github.com/login/oauth/authorize

child_process.exec(`start https://github.com/login/oauth/authorize?client_id=Iv1.317364ab66a8590c`)

// 3 创建server，接受token，点击发布

http.createServer(function (request, response) {
  let query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1])
  publish(query.token);
}).listen(8083);

function publish(token) {
  let request = http.request({
    hostname: "127.0.0.1",
    port: 8082,
    method: "POST",
    path: "/publish?token=" + token,
    headers: {
      'Content-Type': 'application/octet-stream'
    }
  }, response => {
    console.log(response);
  });

  const archive = archiver('zip', {
    zlib: {
      level: 9
    }
  });

  archive.directory('./sample/', false);

  archive.finalize();

  archive.pipe(request)
}