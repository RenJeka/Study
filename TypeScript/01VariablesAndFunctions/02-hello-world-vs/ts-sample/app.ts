class Message {
    messageText: string;

    constructor(text) {
        this.messageText = text;
    }

    showAlert() {
        alert(this.messageText);
    }
}

let test = new Message("Hello world");
test.showAlert();