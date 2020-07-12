import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './01-create/create.component';
import { DisposeProblemComponent } from './02-dispose-problem/dispose-problem.component';
import { DisposeImplementationComponent } from './03-dispose-implementation/dispose-implementation.component';
import { ErrorsComponent } from './04-errors/errors.component';
import { ObservableVsPromiseComponent } from './05-observable-vs-promise/observable-vs-promise.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateComponent, DisposeProblemComponent, DisposeImplementationComponent, ErrorsComponent, ObservableVsPromiseComponent]
})
export class IntroModule { }
