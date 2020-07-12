import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { Registration6Component } from "./01_customValidator/registration.component";
import { Registration7Component } from "./02_asyncValidator/registration.component";
import { Registration8Component } from "./03_asyncValidatorDep/registration.component";

@NgModule({
  declarations: [
    AppComponent,
    Registration6Component,
    Registration7Component,
    Registration8Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "01_custom-validator", component: Registration6Component },
      { path: "02_custom-validator", component: Registration7Component },
      { path: "03_custom-validator", component: Registration8Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
