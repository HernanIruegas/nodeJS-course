//now we are going to use node's event emitters
var Emitter = require('events');//events is a core JS module
var eventConfig = require('./config').events;

var emtr = new Emitter();

//eventConfig.GREET = we are passing strings in the form of variables, so if we make a typo, it is easier for
//the debugger to find the error
emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);