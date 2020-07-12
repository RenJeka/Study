import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutableVsImmutableComponent } from './01-mutable-vs-immutable/mutable-vs-immutable.component';
import { ObjectAssignComponent } from './02-object-assign/object-assign.component';
import { ObjectFreezeComponent } from './03-object-freeze/object-freeze.component';
import { ImmutableMapComponent } from './04-immutable-map/immutable-map.component';
import { FromJsComponent } from './05-from-js/from-js.component';
import { ImmutableListComponent } from './06-immutable-list/immutable-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MutableVsImmutableComponent, ObjectAssignComponent, ObjectFreezeComponent, ImmutableMapComponent, FromJsComponent, ImmutableListComponent]
})
export class ImmutablejsModule { }
