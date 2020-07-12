import { Directive, Input, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[myRepeat], myRepeat" // директиву можно использовать как атрибут и как элемент
})
export class MyRepeatDirective {

  @Input() message: string;
  @Input() count: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
      for (let i = 0; i < this.count; i++) {
          // Создание элемента div в элементе для которого установлена директива
          let elem: HTMLDivElement = this.renderer.createElement("div");
          this.renderer.appendChild(this.elementRef.nativeElement, elem);
          // установка текста для нового элемента.
          elem.innerHTML = this.message;
      }
  }

}
