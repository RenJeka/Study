import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSampleComponent } from './01-create-sample/create-sample.component';
import { FromEventComponent } from './02-from-event/from-event.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateSampleComponent, FromEventComponent]
})
export class CreateModule { }
