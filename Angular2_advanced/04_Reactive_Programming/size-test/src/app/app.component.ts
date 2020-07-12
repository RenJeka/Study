import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Rx';

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/filter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    let source = Observable.interval(100)
      .filter(x => x % 2 == 0)
      .subscribe(x => console.log(x));
  }
}
