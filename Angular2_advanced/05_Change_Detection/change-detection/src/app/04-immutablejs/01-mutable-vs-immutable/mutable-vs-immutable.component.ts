import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mutable-vs-immutable',
  templateUrl: './mutable-vs-immutable.component.html',
  styleUrls: ['./mutable-vs-immutable.component.css']
})
export class MutableVsImmutableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let video = {
      id: 100,
      name: "Angular Advanced"
    };

    let myId = video.id;
    video.id = 101;
    console.log("myId " + myId); // output 100;
    console.log("video.id " + video.id) // output 101
    // Мы изменили значение video.id но myId не изменился так как тип number является immutable

    let video2 = video;
    video2.name = "Angular Essential";
    console.log("video.name " + video.name); // output Angular Essential
    console.log("video2.name " + video2.name); // output Angular Essential
    // меняя video мы также меняем video2 (ссылаются на одну и ту же область памяти). Тип object является mutable 
  }

}
