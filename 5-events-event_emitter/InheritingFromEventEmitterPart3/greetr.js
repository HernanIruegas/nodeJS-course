'use strict';

var EventEmitter = require('events');

//you write extends instead of using the function ".inherits"
module.exports = class Greetr extends EventEmitter {
	constructor() {
		//when using super, you have to specify what you are inheriting from
		super();//this calls the parent constructor, instead of having eventEmitter.call(this)
		this.greeting = 'Hello world!';
	}
	
	greet(data) {
		console.log(`${ this.greeting }: ${ data }`);
		this.emit('greet', data);
	}
}