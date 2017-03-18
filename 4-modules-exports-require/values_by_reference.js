// pass by value
function change(b) {
	//b became a copy of variable a, meaning that it is pointing to a different memory location
	//but that contains the same value as variable a 
	b = 2;
}

var a = 1;
change(a);
console.log(a);

// pass by reference
function changeObj(d) {
	//we are passing an object as a parameter
	//d points to the same memory address as object c
	//c prop1 gets overwritten when passed to the function, and we also add a prop2 to the c object
	d.prop1 = function() {};
	d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);