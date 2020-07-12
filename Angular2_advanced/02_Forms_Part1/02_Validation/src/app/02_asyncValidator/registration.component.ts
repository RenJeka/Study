import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { asyncEmailValidator } from "./async-email.validator";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class Registration7Component implements OnInit {

  registrationForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);

    this.email = new FormControl("", Validators.required, asyncEmailValidator);
    this.password = new FormControl("", [
      Validators.minLength(8),
      Validators.required
    ]);
  }

  createForm() {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log("Отправка данных на сервер");
      console.log(this.registrationForm.value);
    }
  }

}
