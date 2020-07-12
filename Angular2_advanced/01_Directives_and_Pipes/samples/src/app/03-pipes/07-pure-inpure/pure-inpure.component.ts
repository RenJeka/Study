import { Component } from "@angular/core";

@Component({
  selector: "app-pure-inpure",
  templateUrl: "./pure-inpure.component.html"
})
export class PureInpureComponent {
  person1 = { firstName: "Ivan", lastName: "Ivanov" };
  person2 = { firstName: "Ivan", lastName: "Ivanov" };

  changePropPerson1() {
    this.person1.lastName = "...";
  }

  changeRefPerson1() {
    this.person1 = { firstName: "...", lastName: "..." };
  }

  changePropPerson2() {
    this.person2.lastName = "...";
  }

  changeRefPerson2() {
    this.person2 = { firstName: "...", lastName: "..." };
  }
}
