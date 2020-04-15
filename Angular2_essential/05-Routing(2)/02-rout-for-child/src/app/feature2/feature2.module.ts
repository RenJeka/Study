import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { View3Component } from './view3/view3.component';
import { View4Component } from './view4/view4.component';

@NgModule({
  declarations: [View3Component, View4Component],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
