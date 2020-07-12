import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dispose-problem',
  templateUrl: './dispose-problem.component.html'
})
export class DisposeProblemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear();

    // создание Observable
    var source = Observable.create(function (observer) {
      setTimeout(function () {
        console.log("timeout");
        observer.next(100);
        observer.complete();
      }, 1500);

      console.log("started");
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

    // вызывая метод unsubscribe мы отменяем подписку, созданную ранее
    // но без дополнительного кода отмена действия, заложенного в Observable 
    // не произойдет. После запуска метода dispose в консоль будет выведено
    // сообщение timeout, которое говорит о том, что наш код продолжал работать,
    // хотя подписчика, который может обработать событие уже нет
  }

}
