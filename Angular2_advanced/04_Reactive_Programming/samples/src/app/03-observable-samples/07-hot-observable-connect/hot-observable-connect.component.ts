import { Component, OnInit } from '@angular/core';
import { Observable, ConnectableObservable } from 'rxjs/Rx';

@Component({
  selector: 'app-hot-observable-connect',
  templateUrl: './hot-observable-connect.component.html'
})
export class HotObservableConnectComponent implements OnInit {

  source: ConnectableObservable<number>;

  constructor() { }

  ngOnInit() {
    this.source = Observable.interval(500).take(10)
      .publish();

    this.source.connect(); // начать выдавать события, даже если еще нет подписчиков.
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
