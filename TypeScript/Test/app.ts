class MyClass {
	messageText: string;

	constructor(text){
		this.messageText = text;
	}

	showAlert(){
		alert(this.messageText);
	}
}

let myObject = new MyClass("hello");
myObject.showAlert();
