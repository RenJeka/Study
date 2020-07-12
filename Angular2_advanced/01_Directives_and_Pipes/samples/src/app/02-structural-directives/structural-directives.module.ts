import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyIfSampleComponent } from "./01-my-if-sample/my-if-sample.component";
import { MyIfDirective } from "./01-my-if-sample/my-if.directive";
import { DelaySampleComponent } from "./02-delay-sample/delay-sample.component";
import { MyDelayDirective } from "./02-delay-sample/my-delay.directive";
import { ContextSampleComponent } from "./03-context-sample/context-sample.component";
import { UserCardDirective } from "./03-context-sample/user-card.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyIfSampleComponent,
    MyIfDirective,
    DelaySampleComponent,
    MyDelayDirective,
    ContextSampleComponent,
    UserCardDirective
  ]
})
export class StructuralDirectivesModule { }
