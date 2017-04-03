//we get the core http module
var http = require('http');

//the callback function is an event listener
//whener the createServer method emits an event, the funtion is called
http.createServer(function (req, res) {

	//the http-parser catches the request
	//we create the http response, which starts with the status and then with the header fields
	//'text/plain' is a MIME type that tells the browser what the server is sending as a response
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');

}).listen(1337, '127.0.0.1');//in order to emit events
//127.0.0.1 = IP address for the local host
