var name = 'John Doe';

var greet = 'Hello ' + name;//old way
var greet2 = `Hello ${ name }`;//ES6 template literals

//in node you can fully implement ES6 features because node has the latest version of V8 embedded
//but you can't fully implement ES6 features in the browser because the user may not have the latest browser version downloaded,
//hence will not have the latest V8 version in it; but you can use tools like babel to get around this issue

console.log(greet);
console.log(greet2);