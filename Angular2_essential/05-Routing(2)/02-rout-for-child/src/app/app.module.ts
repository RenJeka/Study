import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Feature1Module,
    Feature2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
