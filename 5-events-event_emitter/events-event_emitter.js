// object properties and methods
var obj = {
	greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

//You can use a variable to dynamically grab a value off a property or method in an object
var prop = 'greet';//prop is set equal to a string (which is the property of obj)
console.log(obj[prop]); //prop points to the "greet" property

// functions and arrays
var arr = [];

//since functions are first class, you can put them inside arrays
arr.push(function() {
	console.log('Hello world 1');
});
arr.push(function() {
	console.log('Hello world 2');
});
arr.push(function() {
	console.log('Hello world 3');
});

arr.forEach(function(item) { //each function inside the array will be an item
	item(); //since each time the item is a funtion, you can just call it
});