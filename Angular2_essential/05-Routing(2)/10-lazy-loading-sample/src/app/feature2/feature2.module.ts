import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Feature2ViewComponent } from './feature2-view/feature2-view.component';

@NgModule({
  declarations: [Feature2ViewComponent],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
