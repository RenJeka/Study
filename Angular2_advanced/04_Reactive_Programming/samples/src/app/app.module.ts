import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroModule } from './01-intro/intro.module';
import { CreateModule } from './02-create/create.module';
import { ObservableSamplesModule } from './03-observable-samples/observable-samples.module';
import { ServiceModule } from './04-service/service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    IntroModule,
    CreateModule,
    ObservableSamplesModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
