var http = require('http');
var connect =  require('connect');

var app = connect();

function doFirst(request, response, next){
	console.log("Bacon");
	next();
}

function doSecond(request, response, next){
	console.log("Tuna");
	next();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("Server is now running");