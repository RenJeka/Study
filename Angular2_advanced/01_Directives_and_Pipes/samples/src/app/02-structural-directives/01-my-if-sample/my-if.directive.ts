import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[myIf]"
})
export class MyIfDirective {

  // TemplateRef - шаблон, который может использоваться для создания представления.
  // ViewContainerRef - контейнер содержащий представление. Каждый контейнер привязан к элементу разметки. 
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  @Input("myIf") set MyIfValue(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef); // создание представления на основе шаблона.
    } else {
      this.viewContainer.clear(); // удаление представлений из контейнера.
    }
  }

}
