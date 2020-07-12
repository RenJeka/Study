import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs/Rx';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html'
})
export class BehaviorSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear();

    // behavorSubject - объект который работает как Observer и Observable одновременно. При это данный объект сохраняет последнее значение, которое было представлено через
    // метод next. Если к данному объекту создать подписку после того как будет выпущено значение - подписчик получит значение, созданное до подписки.
    // http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/subjects.html

    var subject = new BehaviorSubject(0);
    //var subject = new ReplaySubject();

    subject.next(101);
    subject.next(102);
    subject.next(103);

    var subscription = subject.subscribe(
      r => console.log(r),
      e => console.error(e),
      () => console.info("completed")
    );

    subject.next(104);
    subject.next(105);

    subject.complete();

    subscription.unsubscribe();
  }

}


