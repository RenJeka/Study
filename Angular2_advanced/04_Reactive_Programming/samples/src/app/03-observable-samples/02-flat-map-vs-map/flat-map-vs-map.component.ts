import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-flat-map-vs-map',
  templateUrl: './flat-map-vs-map.component.html'
})
export class FlatMapVsMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear();

    // map - применяет указанную функцию к каждому значению, которое предоставил источник (Observable)
    /*let source = Observable
      .interval(100)
      .take(10)
      .map(x => x * 2);

    source.subscribe(x => console.log(x));
    */
    /*
    let source = Observable
        .interval(100)
        .take(10)
        .map(x => 
          Observable.timer(500).map(() => x) 
          // для каждого значения из источника выполняется асинхронная операция (timer(500))
          // после данной операции источник предоставляет значения, которые представляют новые источники (Observable)
        ); 
 
    source.subscribe(x => console.log(x.toString())); // x новый Observable из источника source
    */
    
    let source = Observable
      .interval(100)
      .take(10)
      // flatMap подписываеться на событие от каждого Observable определенного в параметрах
      // http://reactivex.io/documentation/operators/flatmap.html
      .flatMap(x =>
        Observable.timer(500).map(() => x)
      );

    source.subscribe(x => console.log(x));
    
  }

}
