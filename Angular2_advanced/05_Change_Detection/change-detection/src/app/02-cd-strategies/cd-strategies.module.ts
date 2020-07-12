import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdStrategiesSampleComponent } from './cd-strategies-sample/cd-strategies-sample.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CdStrategiesSampleComponent, UserCardComponent]
})
export class CdStrategiesModule { }
