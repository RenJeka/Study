import { Component } from "@angular/core";
import { FormsService } from "./shared/forms.service";
import { ElementBase } from "./model/element-base";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [FormsService]
})
export class AppComponent {
  title = "app";
  elements: ElementBase<any>[];

  constructor(private fs: FormsService) {
    this.elements = fs.getElements();
  }
}
