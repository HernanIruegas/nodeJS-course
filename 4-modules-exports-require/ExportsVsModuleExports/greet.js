exports = function() {
	console.log('Hello');
}

console.log(exports); //exports passes from being an empty object, to being a function
console.log(module.exports); //module.exports still is an empty object, since exports was set equal to a function, 
//so "exports" changed from pointing the same object as module.exports, to pointing another memory location
//what gets returned is module.exports