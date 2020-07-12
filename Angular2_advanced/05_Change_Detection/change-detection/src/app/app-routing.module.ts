import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CdSampleComponent } from "./01-change-detection/cd-sample/cd-sample.component";
import { CdStrategiesSampleComponent } from "./02-cd-strategies/cd-strategies-sample/cd-strategies-sample.component";
import { MainComponent } from "./03-do-check-sample/main/main.component";
import { MutableVsImmutableComponent } from "./04-immutablejs/01-mutable-vs-immutable/mutable-vs-immutable.component";
import { ObjectAssignComponent } from "./04-immutablejs/02-object-assign/object-assign.component";
import { ObjectFreezeComponent } from "./04-immutablejs/03-object-freeze/object-freeze.component";
import { ImmutableMapComponent } from "./04-immutablejs/04-immutable-map/immutable-map.component";
import { FromJsComponent } from "./04-immutablejs/05-from-js/from-js.component";
import { ImmutableListComponent } from "./04-immutablejs/06-immutable-list/immutable-list.component";


const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "sample1" },
    { path: "sample1", component: CdSampleComponent },
    { path: "sample2", component: CdStrategiesSampleComponent },
    { path: "sample3", component: MainComponent },
    { path: "sample4", component: MutableVsImmutableComponent },
    { path: "sample5", component: ObjectAssignComponent },
    { path: "sample6", component: ObjectFreezeComponent },
    { path: "sample7", component: ImmutableMapComponent },
    { path: "sample8", component: FromJsComponent },
    { path: "sample9", component: ImmutableListComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }