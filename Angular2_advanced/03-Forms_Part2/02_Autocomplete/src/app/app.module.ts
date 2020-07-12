import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AutocompleteHostComponent } from './autocomplete/autocomplete-host.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    AutocompleteHostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "autocomplete", component: AutocompleteHostComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
