var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

index = require('./routes/index');
hello = require('./routes/hello');

app.use(index);
app.use(hello);


app.use(function(req, res, next){
	var err = new Error('Not found');
	err.status = 404;
	next(err);
});

app.use(function (err, req, res, next){
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: err
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});