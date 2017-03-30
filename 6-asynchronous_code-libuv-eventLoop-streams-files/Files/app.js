//built in fs module that deals with filesystem
var fs = require('fs');

//you give the path for the file as a parameter as well as the encoding in order to read the data
//readFileSync is a synchronous way to read a file
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	console.log(data);
});

console.log('Done!');