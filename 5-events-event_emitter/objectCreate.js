//this will be a prototype for objects created
//instead of using a function constructor, we just use an object literal
var person = {
	firstname: '',
	lastname: '',
	greet: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

//you will have an empty object called john, whose prototype will be the object person
var john = Object.create(person); //we are telling what to create the object from
john.firstname = 'John';//you can overwrite the properties of the person object by adding the properties directly to the john object
//JS first looks for properties and methods inside the object, then it goes to the prototype
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());