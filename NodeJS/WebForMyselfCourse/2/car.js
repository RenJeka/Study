function Car(carName) {
	this.carName = carName || "unknown car";
}

Car.prototype.logName = function() {
	console.log("Car name is: ", this.carName);
}

// module.exports = {
// 	Car: Car
// };

global.Car = Car;