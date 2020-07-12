import { Component } from "@angular/core";

@Component({
  selector: "app-async-pipes",
  templateUrl: "./async-pipes.component.html"
})
export class AsyncPipesComponent {

  dataFromServer: Promise<string> = null;
  resolvePromise: Function = null;
  fail: Function = null;

  constructor() {
    this.dataFromServer = new Promise<string>((resolve, reject) => { this.resolvePromise = resolve; this.fail = reject; })
  }

  getData() {
    setTimeout(() => {
      this.resolvePromise("Data from server.");
    }, 1000);
  }

}
