// 异步读取文件
var fs = require('fs');

fs.readFile('demo.txt', 'utf-8', function(err, data){
	if(err) {
		console.log(err);
	}
	else {
		console.log(data);
	}
});
console.log("end");

var data2 = fs.readFileSync('demo.txt', 'utf-8');
console.log(data2);
console.log("完");