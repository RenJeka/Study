import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

@NgModule({
    declarations: [View1Component, View2Component],
    imports: [
        CommonModule,
        Feature1RoutingModule
    ]
})
export class Feature1Module { }
