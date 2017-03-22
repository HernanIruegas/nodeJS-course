var obj = {
	name: 'John Doe',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();

//using .call() is the same as invoking the function, the difference is that 
//you can pass a variable to it, and whatever you pass, is what the "this" keyword will point to
//so you are overwriting the function
obj.greet.call({ name: 'Jane Doe'}); 
obj.greet.apply({ name: 'Jane Doe'});