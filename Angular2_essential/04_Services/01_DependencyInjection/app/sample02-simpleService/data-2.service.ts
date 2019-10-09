import { Injectable } from "@angular/core";



@Injectable()
export class Service2 {
	someMethod() {
		console.log('%c Service2 works!!!', "color:green; font-weight:bold; font-size:28px; backGround:lightblue; border-radius:5px");
	}
}
