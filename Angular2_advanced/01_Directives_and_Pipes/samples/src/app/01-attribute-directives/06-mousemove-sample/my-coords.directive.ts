import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[myCoords]"
})
export class MyCoordsDirective {

  constructor(private ef: ElementRef) { }
  
      // установка обработчика на событие mousemove и передача в качестве параметра объекта $event
      @HostListener("mousemove", ["$event"]) onMouseMove(event: MouseEvent) {
          let message = "X " + event.offsetX + " Y " + event.offsetY;
          this.ef.nativeElement.innerHTML = message;
      }

}
