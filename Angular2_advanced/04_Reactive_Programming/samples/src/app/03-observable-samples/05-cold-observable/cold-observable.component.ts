import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html'
})
export class ColdObservableComponent implements OnInit {

  source: Observable<number>;

  constructor() { }

  ngOnInit() {
    // cold observable - объект, который для каждого подписчика создает идентичную полседовательность событий
    // cold Observable можно сравнить с видео на Youtube - каждый пользователь запустивший видео, не зависимо от момента нажатия на Play,
    // будет смотреть видео с самого начала.
    this.source = Observable.interval(500).take(10);
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
