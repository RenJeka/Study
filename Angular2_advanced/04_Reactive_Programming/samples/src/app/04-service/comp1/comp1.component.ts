import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  value: string = "";

  constructor(private service: MyService) { }

  ngOnInit() {
  }

  start() {
    this.service.subscribe((v) => this.value += v.toString() + ",");
  }

}
