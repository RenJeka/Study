var MyClass = /** @class */ (function () {
    function MyClass(text) {
        this.messageText = text;
    }
    MyClass.prototype.showAlert = function () {
        alert(this.messageText);
    };
    return MyClass;
}());
var myObject = new MyClass("hello");
myObject.showAlert();
