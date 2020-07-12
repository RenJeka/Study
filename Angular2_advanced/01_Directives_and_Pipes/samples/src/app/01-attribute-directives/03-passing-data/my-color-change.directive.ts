import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[myColorChange]"
})
export class MyColorChangeDirective {

  constructor (private elementRef: ElementRef, private renderer: Renderer2) {
  }
  
  @Input("myColorChange") set changeColor (color: string) {
      this.renderer.setStyle(this.elementRef.nativeElement, "color", color);
  }
}
