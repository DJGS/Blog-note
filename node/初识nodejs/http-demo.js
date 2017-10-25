// 一个简单的http请求
var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>hello nodeJs!</h1>');
	res.end('<p>hello world</p>');

}).listen(3000);
