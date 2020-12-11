'use strict';
var http = require('http');
var port = process.env.PORT || 1339;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Woadqwdasdzfgrtefwadsdfgtrld\n');
}).listen(port);