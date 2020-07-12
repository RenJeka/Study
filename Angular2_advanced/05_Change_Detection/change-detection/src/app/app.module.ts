import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChangeDetectionModule } from './01-change-detection/change-detection.module';
import { CdStrategiesModule } from './02-cd-strategies/cd-strategies.module';
import { DoCheckSampleModule } from './03-do-check-sample/do-check-sample.module';
import { ImmutablejsModule } from './04-immutablejs/immutablejs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChangeDetectionModule,
    CdStrategiesModule,
    DoCheckSampleModule,
    ImmutablejsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
