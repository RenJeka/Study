import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear();

    // Subject - объект который работает как Observer и Observable одновременно.
    // http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/subjects.html

    var subject = new ReplaySubject();
    
    var subscription = subject.subscribe(
      r => console.log(r),
      e => console.error(e),
      () => console.info("completed")
    );
    
    subject.next(1);
    subject.next(2);
    subject.next(3);

    subject.complete();

    subscription.unsubscribe();
  }

}
