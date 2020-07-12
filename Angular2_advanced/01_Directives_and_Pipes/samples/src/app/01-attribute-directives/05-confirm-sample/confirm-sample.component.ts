import { Component } from "@angular/core";

@Component({
  selector: "app-confirm-sample",
  templateUrl: "./confirm-sample.component.html"
})
export class ConfirmSampleComponent {

  onDelete() {
    console.log("onDelete called.");
  }

}
