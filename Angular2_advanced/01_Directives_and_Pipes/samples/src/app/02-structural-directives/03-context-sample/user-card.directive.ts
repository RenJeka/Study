import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[userCard]"
})
export class UserCardDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    let context: UserCardContext = new UserCardContext("Ivan", "Ivanov");
    this.viewContainer.createEmbeddedView(this.templateRef, context);
  }

}

class UserCardContext {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
