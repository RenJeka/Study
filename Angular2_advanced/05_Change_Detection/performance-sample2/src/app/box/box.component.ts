import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnInit {

  @Input() public box: any;
  @Input() selected: boolean;

  color: string;

  constructor() { }

  ngOnInit() {
    this.color = `rgba(${this.getRandValue()},${this.getRandValue()},${this.getRandValue()}, 0.5)`;
  }

  getRandValue() {
    return Math.floor((Math.random() * 255) + 1);
  }

}
