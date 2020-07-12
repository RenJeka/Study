import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-vs-promise',
  templateUrl: './observable-vs-promise.component.html'
})
export class ObservableVsPromiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Использование Promise
    var promise = new Promise((resolve) => {

      setTimeout(() => {
        console.log("Promise timeout");
        resolve(100);
      }, 1000);

      console.log("Promise started");
    });

    promise.then((value) => { console.log("Promise value = " + value); });

    // Использование Observable
    var observable = Observable.create((observer) => {

      var id = setTimeout(() => {
        console.log("Observable timeout");
        observer.next(100);
      }, 1000);

      console.log("Observable started");

      return () => {
        console.log("Observable disposed");
        clearTimeout(id);
      }
    });

    var subscriber = observable.subscribe((value) => console.log("Observable value = " + value));

    // Отличия между Observable и Promise
    // 1. Если у Observable нет подписчиков - код Observable не будет выполняться. Promise выполнит связанный с ним код в любом случае.
    // для проверки этого, поставьте комментарий на строчках 24 и 42. Сообщение "Promise timeout" будет отображаться в консоли хотя функция then не вызывалась
    // 2. Observable объекты можно отменить вызвав метод unsubscribe. Снимите комментарий кода на строке 50.
    // 3. Promise представляет единственное значение, которое является результатом асинхронной операции. Observable может представлять несколько значений.

    setTimeout(() => { subscriber.unsubscribe(); }, 500);
  }

}
