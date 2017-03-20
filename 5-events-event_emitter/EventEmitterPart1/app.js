var Emitter = require('./emitter');

var emtr = new Emitter();

//"greet" is the property name inside the object "emtr"; "greet" represents an event but it is in fac a property name
//you also pass the function, the event listener, as a parameter
emtr.on('greet', function() { 
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');

/*
what emit does it looks for the property "greet" then loops through it
and executes all the functions that were pushed inside the array
*/