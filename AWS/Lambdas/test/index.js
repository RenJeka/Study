'use strict';

console.log('Function is loading');

module.myStartPoint = (event, context, callback) => {
	console.log(event.a); // Number
	console.log(event.b); // Number

	callback(null, event.a + event.b);
}