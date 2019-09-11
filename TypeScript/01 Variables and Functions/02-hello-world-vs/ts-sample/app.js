var Message = /** @class */ (function () {
    function Message(text) {
        this.messageText = text;
    }
    Message.prototype.showAlert = function () {
        alert(this.messageText);
    };
    return Message;
}());
var test = new Message("Hello world");
test.showAlert();
//# sourceMappingURL=app.js.map