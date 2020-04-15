import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature2ViewComponent } from './feature2-view/feature2-view.component';

const routes: Routes = [
    { path: "view2", component: Feature2ViewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Feature2RoutingModule { }
