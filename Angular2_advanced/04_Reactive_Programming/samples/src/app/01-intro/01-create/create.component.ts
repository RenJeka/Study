import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear();

    // создание Observable
    //    var source = Observable.create(function (observer) {
    var source = new Observable(function (observer) {
      setTimeout(function () {
        console.log("timeout");
        observer.next(100); // оповещение наблюдателя о новом элементе в последовательности
        observer.complete(); // оповещение наблюдателя о завершении последовательности
      }, 1500);

      console.log("started");
    });

    // создание подписчика с определением 3х обработчиков
    var sub = source.subscribe(
      function (value) { // onNext
        console.log("next " + value);
      },
      function (error) { // onError
        console.error(error);
      },
      function () { // onCompleted
        console.info("completed");
      }
    );
  }

}
