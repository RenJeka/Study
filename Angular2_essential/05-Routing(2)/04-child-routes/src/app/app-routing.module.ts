import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    { path: "", redirectTo: "products-list", pathMatch: "full" },
    { path: "settings", component: SettingsComponent },
    {
        path: "products-list", component: ProductHomeComponent, // Шаблон компонента ProductHomeComponent содержит свой <router-outlet> 
        children: [                                             // для определения маршрутов и компонентов для этого <router-outlet> используется свойство children
            { path: "", component: ProductListComponent }, 
            { path: "child", component: ProductDetailsComponent}
        ]
        // ---------------------------------------------------
        // path: "products-list", component: ProductHomeComponent, // Шаблон компонента ProductHomeComponent содержит свой <router-outlet> 
        // children: [                                             // для определения маршрутов и компонентов для этого <router-outlet> используется свойство children
        //     {
        //         path: "", component: ProductListComponent,
        //         children: [
        //             { path: "child", component: ProductDetailsComponent }
        //         ]
        //     }      // http://stepansuvorov.com/blog/2017/02/%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80-%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80/

        // ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
