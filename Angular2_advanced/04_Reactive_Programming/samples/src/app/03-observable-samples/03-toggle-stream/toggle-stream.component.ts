import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-toggle-stream',
  templateUrl: './toggle-stream.component.html'
})
export class ToggleStreamComponent implements AfterViewInit {

  output: string = "";
  @ViewChild("toggleBtn")
  toggleBtn: ElementRef;

  constructor() { }

  ngAfterViewInit() {

    let toggleStream = Observable
      .fromEvent<Event>(this.toggleBtn.nativeElement, "change")
      .map(x => (x.target as HTMLInputElement).checked);

    let dashGeneratorStream = Observable.interval(500).map(() => "-");

    let resultStream = toggleStream.filter(x => x === true)
      // dashGeneratorStream.takeUntil(toggleStream) поток dashGeneratorStream будет выдавать события до тех пор пока поток toggleStream не выдаст события, после чего поток resultStream не будет выдавать событий до повторного события от потока toggleStream
      .flatMap(() => dashGeneratorStream.takeUntil(toggleStream));

    resultStream.subscribe(x => this.output += x);
  }

}
