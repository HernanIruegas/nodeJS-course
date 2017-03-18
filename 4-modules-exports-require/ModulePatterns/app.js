var greet = require('./greet1');//it return the module.exports object, which is a function
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

//both greet3 and greet 3b end up pointing at the same object
//since “require” caches the results of the require function for any particular filename
//if it sees that you are requiring a file again, it will return what was cached when it was required the first time

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4(); //now you can create different objects using the same file, because you are not requiring the same file again and again, but using the method it returned in module.exports
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();