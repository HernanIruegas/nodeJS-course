var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

//I also want Policeman to have access to everything that Person has access to
function Policeman() {
	//this is so that Policeman can inherit the properties and method directly on Person, not on Person's prototype
	Person.call(this);
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);//just connects the prototypes
var officer = new Policeman();
officer.greet();