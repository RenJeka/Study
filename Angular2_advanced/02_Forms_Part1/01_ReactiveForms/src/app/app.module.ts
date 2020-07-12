import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { Registration1Component } from "./01_registration/registration.component";
import { Registration2Component } from "./02_registration/registration.component";
import { Registration3Component } from "./03_registration/registration.component";
import { Registration4Component } from "./04_registration/registration.component";
import { Registration5Component } from "./05_registration/registration.component";

@NgModule({
  declarations: [
    AppComponent,
    Registration1Component,
    Registration2Component,
    Registration3Component,
    Registration4Component,
    Registration5Component,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "01_registration", component: Registration1Component },
      { path: "02_registration", component: Registration2Component },
      { path: "03_registration", component: Registration3Component },
      { path: "04_registration", component: Registration4Component },
      { path: "05_registration", component: Registration5Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
