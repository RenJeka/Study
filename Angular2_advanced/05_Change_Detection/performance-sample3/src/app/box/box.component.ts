import { Component, OnInit, Input, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';

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

  @ViewChild("div")
  set div(value: ElementRef) {
    if (value) {
      value.nativeElement["BoxComponent"] = this;
    }
  }

  color: string;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.color = `rgba(${this.getRandValue()},${this.getRandValue()},${this.getRandValue()}, 0.5)`;
  }

  ngAfterViewInit() {
    this.cdr.detach();
  }

  getRandValue() {
    return Math.floor((Math.random() * 255) + 1);
  }

  update() {
    this.cdr.detectChanges();
  }

}
