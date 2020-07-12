import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component"
import { DynamicFormElementComponent } from "./dynamic-form/dynamic-form-element.component";

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
