function Greetr() {
	this.greeting = 'Hello world!!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}

//here you are not exporting a newly created object as in greet3.js
//but you are passing the ability to create a new object, so you pass the object constructor instead
module.exports = Greetr;