//now we are just adding a method to "exports"
exports.greet = function() { 
	console.log('Hello');
}

//exports and module.exports continue to point to the same object
//so the content of both variables is the same

console.log(exports);
console.log(module.exports);