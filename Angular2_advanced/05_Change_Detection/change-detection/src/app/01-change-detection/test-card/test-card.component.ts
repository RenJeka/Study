import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.css']
})
export class TestCardComponent implements DoCheck {

  static doCheckCounter: number = 0;

  @Input()
  name: string;
  checkPosition: number;

  constructor() { }

  ngDoCheck() {
    this.checkPosition = TestCardComponent.doCheckCounter;
    TestCardComponent.doCheckCounter += 1;
    //console.log("Component " + this.name + " updated. " + new Date().getTime());
  }

}