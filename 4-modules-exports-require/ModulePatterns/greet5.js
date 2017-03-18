var greeting = 'Hello world!!!!';

function greet() {
	console.log(greeting);
}

//the revealing module pattern
//the only thing accesible from other files is the function greet(); but not the variable greeting

module.exports = {
	greet: greet
}