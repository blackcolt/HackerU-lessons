const http = require('http');
const url = require('url');
const fs = require('fs');

// var file = fs.createReadStream('index.html');
//   file.pipe(response);

const requestListener = function (req, res) {
    // res.render('index.html, {name:name});
    // console.log(req)
    // const queryObject = url.parse(req.url, true).query;
    // res.end(`Hi user ${queryObject.name || 'Unknown user'}`);
    var file = fs.createReadStream('index.html');

    // if (req.url == '/about') {
    //     file = fs.createReadStream('about.html');
    // }
    file.pipe(res);
    // console.log(1111);
    // if (req.url == "/about"){
    //     res.writeHead(200);
    //     res.end("<h1>hello world</h1>");
    // } else if(req.url == "/"){
    //     res.writeHead(200);
    //     res.end("home page");
    // } else {
    //     res.writeHead(404);
    //     res.end("not found");
    // }
}

http.createServer(requestListener).listen(90);
console.log("started")