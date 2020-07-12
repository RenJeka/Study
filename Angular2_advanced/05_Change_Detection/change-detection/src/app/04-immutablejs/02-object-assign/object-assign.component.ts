import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-assign',
  templateUrl: './object-assign.component.html',
  styleUrls: ['./object-assign.component.css']
})
export class ObjectAssignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let video1 = {
      id: 100,
      name: "Angular Advanced"
    };

    // Object.assign копирует свойства из одного объекта в другой
    let video2 = Object.assign({}, video1);

    video1.name = "Angular Essential";
    
    console.log(video1 == video2);
    console.log("video1.name " + video1.name); // output Angular Essential 
    console.log("video2.name " + video2.name); // output Angular Advanced
  }

}
