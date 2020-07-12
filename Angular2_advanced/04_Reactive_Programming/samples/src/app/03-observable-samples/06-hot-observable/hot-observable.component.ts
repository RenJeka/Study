import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-hot-observable',
  templateUrl: './hot-observable.component.html'
})
export class HotObservableComponent implements OnInit {

  source: Observable<number>;

  constructor() { }

  ngOnInit() {
    // hot observable - объект, который для всех подписчика использует один поток событий
    // hot observable можно сравнить с прямой трансляцией на Youtube - каждый пользователь просматривает видео с того момента как подключился к трансляции
    this.source = Observable.interval(500).take(10)
      .publish()    // сделать поток событий общим для всех
      .refCount();  // начать выдавать события при появлении первого подписчика
  }

  subscribe1() {
    this.source.subscribe((value) => {
      console.log("Subscriber 1 received a value " + value);
    })
  }

  subscribe2() {
    this.source.subscribe((value) => {
      console.log("       Subscriber 2 received a value " + value);
    })
  }
}
