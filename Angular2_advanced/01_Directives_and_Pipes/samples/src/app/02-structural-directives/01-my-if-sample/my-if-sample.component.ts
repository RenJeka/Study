import { Component } from "@angular/core";

@Component({
  selector: "app-my-if-sample",
  templateUrl: "./my-if-sample.component.html"
})
export class MyIfSampleComponent {

  visible: boolean = false;

  changeVisibility() {
    this.visible = !this.visible;
  }

}
