import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { ThrotteledBufferingComponent } from './01-throtteled-buffering/throtteled-buffering.component';
import { FlatMapVsMapComponent } from './02-flat-map-vs-map/flat-map-vs-map.component';
import { ToggleStreamComponent } from './03-toggle-stream/toggle-stream.component';
import { CatchComponent } from './04-catch/catch.component';
import { ColdObservableComponent } from './05-cold-observable/cold-observable.component';
import { HotObservableComponent } from './06-hot-observable/hot-observable.component';
import { HotObservableConnectComponent } from './07-hot-observable-connect/hot-observable-connect.component';
import { SubjectComponent } from './08-subject/subject.component';
import { BehaviorSubjectComponent } from './09-behavior-subject/behavior-subject.component';
import { HttpSampleComponent } from './10-http-sample/http-sample.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [ThrotteledBufferingComponent, FlatMapVsMapComponent, ToggleStreamComponent, CatchComponent, ColdObservableComponent, HotObservableComponent, HotObservableConnectComponent, SubjectComponent, BehaviorSubjectComponent, HttpSampleComponent]
})
export class ObservableSamplesModule { }
