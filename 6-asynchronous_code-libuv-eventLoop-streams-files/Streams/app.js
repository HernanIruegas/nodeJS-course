var fs = require('fs');

//the second parameter is to get strings and not buffers
//highWaterMark = the number of bytes we want our buffer to be
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

//data is an event emitted by a stream
readable.on('data', function(chunk) {//every chunk will be 16KB in size
	console.log(chunk);
	writable.write(chunk);//we pipe the chunks of the data
});