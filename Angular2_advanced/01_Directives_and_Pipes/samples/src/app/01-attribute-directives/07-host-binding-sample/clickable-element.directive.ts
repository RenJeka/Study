import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[clickableElement]"
})
export class ClickableElementDirective {

  constructor(private ef: ElementRef) {
    ef.nativeElement.style.cursor = "pointer";
  }

  // @HostBinding - позволяет выполнить привязку свойства к host элементу
  // Если свойство isClicked true для хост элемента будет добавленн класс pressed
  @HostBinding("class.pressed") isClicked: boolean = false;

  @HostListener("mousedown") onMouseDown() {
    this.isClicked = true;
  }

  @HostListener("mouseup") onMouseUp() {
    this.isClicked = false;
  }

}
