var express = require('express');//express return a function, which will be assigned to the express variable
var app = express();//we call the express function and assign it to the app variable, this function has properties and methods

var port = process.env.PORT || 3000;//let's suppose there is a PORT variable on the server and I can access it

//instead of using the if else statements, we can use methods available through express
//you don't need to specify a content type (EX: text/html) since the express methods does it for you
app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });//you can give a JS object and the express method will convert it to JSON format
});

app.listen(port);