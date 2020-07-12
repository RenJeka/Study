import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  value: string = "";

  constructor(private service: MyService) { }

  ngOnInit() {
  }

  start() {
    this.service.subscribe((v) => this.value += v.toString() + ",");
  }

}
