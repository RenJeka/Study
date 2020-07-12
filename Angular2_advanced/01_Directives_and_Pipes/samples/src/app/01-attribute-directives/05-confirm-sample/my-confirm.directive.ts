import { Directive, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[myConfirm]"
})
export class MyConfirmDirective {

  @Input("myConfirm") 
  onConfirmed: Function = () => {};

  @HostListener("click") onConfirm() {
      let confirmed = window.confirm("Вы уверены?");

      if(confirmed) {
          this.onConfirmed();
      }
  }

}
