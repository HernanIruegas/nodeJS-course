function Person(firstname, lastname) {
	
	this.firstname = firstname;
	this.lastname = lastname;
	
}

//prototype is not the prototype for Person, it is the prototype for every object created from Person
Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};


//the prototype of john will point to the property called prototype of the function constructor
var john = new Person('John', 'Doe');
john.greet();//JS will look down the protoype chain (since there is no greet() method in john, but is is in its prototype)

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);//you can see the prototype object of the object you are working with
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);

/*
whenever you see a ".prototype" property in code, what is happening is that we are adding
some properties and methods to be availaible to all objects created from a specific 
object constructor
*/