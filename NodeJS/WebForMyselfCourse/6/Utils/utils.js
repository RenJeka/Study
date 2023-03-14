const util = require('util');

function Car () {}

Car.prototype.logName = function () {
	console.log('Car name is: ', this.name);
	
}

function Audio(name){
	this.name = name;
}

Audio.prototype.drive = function () {
	console.log('Audio is Driving ...');
}

util.inherits(Audio, Car);
// ----------  START --------
const myAudio1 = new Audio('myAudio1');
myAudio1.logName();
myAudio1.drive();