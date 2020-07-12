import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dispose-implementation',
  templateUrl: './dispose-implementation.component.html'
})
export class DisposeImplementationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear();

    // создание Observable
    var source = Observable.create(function (observer) {
      var id = setTimeout(function () {
        console.log("timeout");
        observer.next(100);
        observer.complete();
      }, 1500);

      console.log("started");

      // dispose handler
      // при вызове dispose на subject будет вызвана данная функция
      return function () {
        clearTimeout(id);
      }
    });

    var subject = source.subscribe(
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

    setTimeout(function () {
      subject.unsubscribe();
      console.log("unsubscribed");
    }, 500);
  }

}
