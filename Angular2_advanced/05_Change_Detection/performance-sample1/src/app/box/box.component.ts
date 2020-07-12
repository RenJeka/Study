import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() public x: number;
  @Input() public y: number;
  @Input() public num: number;
  @Input() public selected: boolean;

  color: string;

  constructor() { }

  ngOnInit() {
    this.color = `rgba(${this.getRandValue()},${this.getRandValue()},${this.getRandValue()}, 0.5)`;
  }

  getRandValue() {
    return Math.floor((Math.random() * 255) + 1);
  }

}
