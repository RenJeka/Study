import { Component } from "@angular/core";
import { Subscriber } from "rxjs/Subscriber";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-async-observable",
  templateUrl: "./async-observable.component.html"
})
export class AsyncObservableComponent  {

  counter: number = 0;
  time: Observable<number>;

  start() {
      this.time = new Observable<number>((observer: Subscriber<number>) => {
          setInterval(() => {
              observer.next(this.counter++);
          }, 1000);
      });
  }

}
