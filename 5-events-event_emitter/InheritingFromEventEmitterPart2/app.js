var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	//EventEmitter is a function constructor
	//when Greetr is ran, it passes the new empty object to the EventEmitter function constructor
	//since objects are passed by reference in JS, the EventEmitter function constructor adds all the properties and methods, if any, it has
	//then we continue by adding our own properties and kethods manually
	EventEmitter.call(this);
	this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');