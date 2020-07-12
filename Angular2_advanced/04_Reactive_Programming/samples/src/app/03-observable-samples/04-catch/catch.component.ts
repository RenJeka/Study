import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html'
})
export class CatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var source = Observable.of(1, 2, 3, 4, 5, 6)
      .map(x => {
        if (x == 4) throw "error";
        return x;
      })
      //.catch(() => Observable.of("error text")); // обработка исключения
      //.retry(3); // попытаться перезапустить Observable укзанное количество раз
      .retryWhen(err => err.delay(1000).take(3)); // перезапустить с интервалом в 1 сек. три раза

    source.subscribe(
      (x) => console.log(x),
      (error) => console.error(error),
      () => console.log("done"));
  }

}
