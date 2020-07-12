import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimpleDirectiveComponent } from "./01-simple-directive/simple-directive.component";
import { MyColorDirective } from "./01-simple-directive/my-color.directive";
import { EventDirectiveComponent } from "./02-event-directive/event-directive.component";
import { MyEventDirective } from "./02-event-directive/my-event.directive";
import { PassingDataComponent } from "./03-passing-data/passing-data.component";
import { MyColorChangeDirective } from "./03-passing-data/my-color-change.directive";
import { PassingFewParamsComponent } from "./04-passing-few-params/passing-few-params.component";
import { MyRepeatDirective } from "./04-passing-few-params/my-repeat.directive";
import { ConfirmSampleComponent } from "./05-confirm-sample/confirm-sample.component";
import { MyConfirmDirective } from "./05-confirm-sample/my-confirm.directive";
import { MousemoveSampleComponent } from "./06-mousemove-sample/mousemove-sample.component";
import { MyCoordsDirective } from "./06-mousemove-sample/my-coords.directive";
import { HostBindingSampleComponent } from "./07-host-binding-sample/host-binding-sample.component";
import { ClickableElementDirective } from "./07-host-binding-sample/clickable-element.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpleDirectiveComponent, MyColorDirective, EventDirectiveComponent, MyEventDirective, PassingDataComponent, MyColorChangeDirective, PassingFewParamsComponent, MyRepeatDirective, ConfirmSampleComponent, MyConfirmDirective, MousemoveSampleComponent, MyCoordsDirective, HostBindingSampleComponent, ClickableElementDirective]
})
export class AttributeDirectivesModule { }
