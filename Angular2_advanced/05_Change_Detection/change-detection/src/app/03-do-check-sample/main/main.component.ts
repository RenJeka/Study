import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data = {
    id: 0,
    value: "hello"
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.data.id++;
      this.data.value = "world";
    }, 3000);
  }

}
