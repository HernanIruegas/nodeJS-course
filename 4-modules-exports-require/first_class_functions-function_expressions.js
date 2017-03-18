// function statement
function greet() {
	console.log('hi');
}
greet();

// functions are first-class
//which means that we can pass functions as parameters
function logGreeting(fn) {
	fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
	console.log('Hi Tony!');
}
greetMe();

// it is first-class
logGreeting(greetMe);

// use a function expression to create a function on the fly
logGreeting(function() {
	console.log('Hello Tony!');
});