var http = require('http');
var fs = require('fs');//to deliver our index.html to our response

http.createServer(function(req, res) {
    
    //we pull the contents of a file and then manipulate it
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');//the var will hold the content of the index.htm file
    var message = 'Hello world...';
    html = html.replace('{Message}', message);//replace the placeholder with my variable content
    res.end(html);
    
}).listen(1337, '127.0.0.1');