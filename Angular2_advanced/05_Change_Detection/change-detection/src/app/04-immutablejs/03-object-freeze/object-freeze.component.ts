import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-freeze',
  templateUrl: './object-freeze.component.html',
  styleUrls: ['./object-freeze.component.css']
})
export class ObjectFreezeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change() {
    let video1 = {
      id: 100,
      name: "Angular Advanced"
    };

    Object.freeze(video1);

    video1.name = "Angular Essential"; // без ошибки в non-strict, с исключением в strict
    //Object.freeze - потеря производительности на больших массивах
  }

}
