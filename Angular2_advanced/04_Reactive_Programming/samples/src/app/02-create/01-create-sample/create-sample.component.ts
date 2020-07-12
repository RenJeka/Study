import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/observable/from";
import "rxjs/add/observable/of";
import "rxjs/add/observable/interval";

import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";

// Для того чтобы не подключать все необходимые операторы импортируйте Observable из rxjs/Rx
 //import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-create-sample',
  templateUrl: './create-sample.component.html'
})
export class CreateSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear();

    //var source = Observable.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); // создание потока на основе массива. Метод from выполняет необходимые конвертации для получения значений из массива
    //var source = Observable.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9); // создание потока на основе значений
    var source = Observable.interval(500).take(10); // interval увеличивает число и помещает его в поток

    source.filter(x => x % 2 == 0) // поток в котором находятся четные элементы 
      .map(x => x + ".") // поток в котором находятся измененные значения
      .forEach(x => console.log(x)); // действия для каждого элемента в потоке
  }

}
