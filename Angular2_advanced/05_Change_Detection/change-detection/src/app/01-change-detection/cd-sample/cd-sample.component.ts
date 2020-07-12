import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-sample',
  templateUrl: './cd-sample.component.html',
  styleUrls: ['./cd-sample.component.css']
})
export class CdSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  testClick() {
    console.log("test click");
  }

  timerClick() {
    setInterval(function () {
      //console.log("timer")
    }, 2000);
  }

  ajaxClick() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:4200", true);
    xhr.addEventListener("load", () => console.log("xhr load"));
    xhr.addEventListener("error", () => console.log("xhr error"));
    xhr.send();
  }
}
