import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SimpleDirectiveComponent } from "./01-attribute-directives/01-simple-directive/simple-directive.component";
import { EventDirectiveComponent } from "./01-attribute-directives/02-event-directive/event-directive.component";
import { PassingDataComponent } from "./01-attribute-directives/03-passing-data/passing-data.component";
import { PassingFewParamsComponent } from "./01-attribute-directives/04-passing-few-params/passing-few-params.component";
import { ConfirmSampleComponent } from "./01-attribute-directives/05-confirm-sample/confirm-sample.component";
import { MousemoveSampleComponent } from "./01-attribute-directives/06-mousemove-sample/mousemove-sample.component";
import { HostBindingSampleComponent } from "./01-attribute-directives/07-host-binding-sample/host-binding-sample.component";
import { MyIfSampleComponent } from "./02-structural-directives/01-my-if-sample/my-if-sample.component";
import { DelaySampleComponent } from "./02-structural-directives/02-delay-sample/delay-sample.component";
import { ContextSampleComponent } from "./02-structural-directives/03-context-sample/context-sample.component";
import { BuiltinPipesComponent } from "./03-pipes/01-builtin-pipes/builtin-pipes.component";
import { ChainingSampleComponent } from "./03-pipes/02-chaining-sample/chaining-sample.component";
import { AsyncPipesComponent } from "./03-pipes/03-async-pipes/async-pipes.component";
import { AsyncObservableComponent } from "./03-pipes/04-async-observable/async-observable.component";
import { SimplePipe1Component } from "./03-pipes/05-simple-pipe-1/simple-pipe-1.component";
import { SimplePipe2Component } from "./03-pipes/06-simple-pipe-2/simple-pipe-2.component";
import { PureInpureComponent } from "./03-pipes/07-pure-inpure/pure-inpure.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "sample1" },
  { path: "sample1", component: SimpleDirectiveComponent },
  { path: "sample2", component: EventDirectiveComponent },
  { path: "sample3", component: PassingDataComponent },
  { path: "sample4", component: PassingFewParamsComponent },
  { path: "sample5", component: ConfirmSampleComponent },
  { path: "sample6", component: MousemoveSampleComponent },
  { path: "sample7", component: HostBindingSampleComponent },

  { path: "sample8", component: MyIfSampleComponent },
  { path: "sample9", component: DelaySampleComponent },
  { path: "sample10", component: ContextSampleComponent },

  { path: "sample11", component: BuiltinPipesComponent },
  { path: "sample12", component: ChainingSampleComponent },
  { path: "sample13", component: AsyncPipesComponent },
  { path: "sample14", component: AsyncObservableComponent },
  { path: "sample15", component: SimplePipe1Component },
  { path: "sample16", component: SimplePipe2Component },
  { path: "sample17", component: PureInpureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
