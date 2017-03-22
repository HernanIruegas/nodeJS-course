//the JS is more strict in the things it lets you do
'use strict';

class Person {
	constructor(firstname, lastname) {
		////any methods or properties put inside the constructor, are put directly on the object
		this.firstname = firstname;
		this.lastname = lastname;
	}
	
	//any other methods or properties put inside the class, are put inside the prototype
	greet() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
