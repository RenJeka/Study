var _this = this;
//================================================
var f1 = function () { return console.log("%c Hello, there! Guys.", "color:yellow"); };
f1();
// ===============================================
// function f2(x, y) {
// 	return x*x +(2*x*y) + y*y;
// }
var f2 = function (x, y) { return x * x + (2 * x * y) + y * y; };
console.log(f2(13, 26));
//===============================================
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array1);
var sum = 0;
array1.forEach(function (elementOfArray) { return sum += elementOfArray; });
var squared = array1.map(function (n) { return n * n; });
console.log("sum = " + sum);
console.log(squared);
//================================================
var person = {
    name: "Bob",
    greet: function () {
        console.log("Hello, my name is " + _this.name);
        console.log(_this);
    }
};
person.greet();
(function () { return console.log("Куча скобочек"); })();
(function () { return "()"; })(); // Смотри какую херню можно творить на JavaScript. Это функция
// ================================================
