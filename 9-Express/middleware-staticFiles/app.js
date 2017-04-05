var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

//this is middleware, express will look for static files inside the public folder
//e used a built in function of express for our middleware
app.use('/assets', express.static(__dirname + '/public'));

//app.use just matches a route. then takes a function
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
});

//we make use of a variable in our URL
app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);