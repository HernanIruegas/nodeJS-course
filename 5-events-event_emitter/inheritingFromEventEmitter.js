var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	this.greeting = 'Hello world!';
}

//every objects created from Greetr should also have access to the methods and properties on the prototype property of EventEmitter
util.inherits(Greetr, EventEmitter);

//Greetr is also an eventEmitter
Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);//we pass the parameter to each function invoked
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {//you expect data
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');