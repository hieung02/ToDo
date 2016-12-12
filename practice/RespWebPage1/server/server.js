var express = require('express');
var app = express();

var fs = require('fs');

// var staticAssets = 'Z:/students/Front-End Web Dev - Oct 2016 to Jan 2017/Hieu Nguyen/Projects/Web-Development-Projects/NPM/practice/RespWebPage1/public';
var staticAssets = __dirname +'/public';

app
	 .use(express.static(staticAssets))
	 .get('/', function(req, res){

	 		fs.readFile('index.html', function(err, data){
	 			
	 			var count = 0;
	 			
	 			res.setHeader('Content-Type','text/html');
	 			res.send(data+'<p>count '+count+'</p>');
	 			
	 			count++;  
	 		});
	 	})
	 	.get('/*', function(req, res){
	 		res.setHeader('Content-Type','text/html');
	 		res.send('<h1>404 - Site Not Found</h1>');
	 	})
		


app.listen(3000);
console.log('connected')