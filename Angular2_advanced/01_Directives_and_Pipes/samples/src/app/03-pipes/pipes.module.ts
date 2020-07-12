import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BuiltinPipesComponent } from "./01-builtin-pipes/builtin-pipes.component";
import { ChainingSampleComponent } from "./02-chaining-sample/chaining-sample.component";
import { AsyncPipesComponent } from "./03-async-pipes/async-pipes.component";
import { AsyncObservableComponent } from "./04-async-observable/async-observable.component";
import { SimplePipe1Component } from "./05-simple-pipe-1/simple-pipe-1.component";
import { MyCustomPipe } from "./05-simple-pipe-1/my-custom.pipe";
import { SimplePipe2Component } from "./06-simple-pipe-2/simple-pipe-2.component";
import { FormatDistancePipe } from "./06-simple-pipe-2/format-distance.pipe";
import { PureInpureComponent } from "./07-pure-inpure/pure-inpure.component";
import { MyPurePipe, MyImpurePipe } from "./07-pure-inpure/my-pipes.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BuiltinPipesComponent, ChainingSampleComponent, AsyncPipesComponent, AsyncObservableComponent, SimplePipe1Component, MyCustomPipe, SimplePipe2Component, FormatDistancePipe, PureInpureComponent, MyPurePipe, MyImpurePipe]
})
export class PipesModule { }
