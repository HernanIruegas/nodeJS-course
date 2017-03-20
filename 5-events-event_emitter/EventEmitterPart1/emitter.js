//this file allows us to say that an event has happened
//and how to respond to the event
function Emitter() {
	this.events = {};//events is an empty object
	/*
	this.events = {
		//prop1 = []; this is what you are creating with this.events[type] = this.events[type] || [], a property that is an array
	}
	*/
}

//this function 1)creates a new property on the object (an array)
//2) adds functions into the array
Emitter.prototype.on = function(type, listener) {//takes the type of event 
	this.events[type] = this.events[type] || [];//it says if the property already exists then great, otherwise make it a new array
	this.events[type].push(listener);//push the listener function into the array
}

/* this represents the object "events"; it has a property, which is an array composed of funtions
{
	gotSomethingFromInternet: [function () {}, function () {}, function () {}];
}
*/

Emitter.prototype.emit = function(type) {
	if (this.events[type]) {//if i have that property (event) on the object then
		this.events[type].forEach(function(listener) {//loops through the array of functions
			listener();//executes each function
		});
	}
}

module.exports = Emitter; //so you can create as many event emitters as you like

/*
Example: if you want to emit the event named fileWasSaved happened,
then you need to check if fileWasSaved is a property of the object,
if it does exist, then it is going to be an array, so you loop through it,
then you execute all the functions inside the array (which are the event listeners)

if you were to listen to the event fileWasSaved, then you would have called the "on" function
to make sure that you add fileWasSaved as a property of the object, and then
you were to push into the array the listener function
*/

