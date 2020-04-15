import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1ViewComponent } from './feature1/feature1-view/feature1-view.component';

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "view1" },
    { path: "view1", component: Feature1ViewComponent },
    // При переходе по ссылке /feature2 будет догружен модуль feature2.module 
    { path: "feature2", loadChildren: 
    () => import("./feature2/feature2.module").then(mod => mod.Feature2Module) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
