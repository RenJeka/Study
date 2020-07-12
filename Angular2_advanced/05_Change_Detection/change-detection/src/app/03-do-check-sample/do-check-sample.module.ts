import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NestedComponent } from './nested/nested.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, NestedComponent]
})
export class DoCheckSampleModule { }
