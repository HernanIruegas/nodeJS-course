function Greetr() {
	this.greeting = 'Hello world!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}

//you replace module.exports empty object with your created object, using the object constructor
module.exports = new Greetr();