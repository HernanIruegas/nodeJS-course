function greet(callback) {
	console.log('Hello!');
	var data = {
		name: 'John Doe'
	};
	
	callback(data);
}

//the greet function will later invoke the callback function
greet(function(data) {
	console.log('The callback was invoked!');
	console.log(data);
});

greet(function(data) {
	console.log('A different callback was invoked!');
	console.log(data.name);
});