import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdSampleComponent } from './cd-sample/cd-sample.component';
import { TestCardComponent } from './test-card/test-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CdSampleComponent, TestCardComponent]
})
export class ChangeDetectionModule { }
