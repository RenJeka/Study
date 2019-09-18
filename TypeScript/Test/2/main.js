var Cat = /** @class */ (function () {
    function Cat() {
        this.weight = 2.5;
    }
    Cat.prototype.eat = function () {
        this.weight += 0.5;
        console.log("eat = " + this.weight);
    };
    Cat.prototype.run = function () {
        this.weight -= 0.5;
        console.log("run = " + this.weight);
    };
    Cat.prototype.showWeight = function () {
        console.log('%c 龴ↀ◡ↀ龴   My owner, my weight only ' + this.weight + "kg. Can I eat more?", 'background: #222; color: #bada55; font-size: 18px;');
    };
    return Cat;
}());
var cat1 = new Cat();
cat1.eat();
cat1.eat();
cat1.eat();
cat1.run();
cat1.showWeight();
console.log(cat1);
