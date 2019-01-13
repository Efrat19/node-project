// var http = require('http');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'secrecy-level':'AAA'})
//     console.log(req);
//     res.end('server msg');
// }).listen(212,'127.0.0.1');

var http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'secrecy-level':'AAA'})
    console.log(req);
    res.end('server msg');
}).listen(212,'127.0.0.1');