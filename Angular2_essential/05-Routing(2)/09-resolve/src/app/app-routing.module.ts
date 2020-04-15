import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { LoginComponent } from './login/login.component';
import { CanDeactivateGuardService } from './shared/can-deactivate-guard.service';
import { ProductDetailsResolveService } from './shared/product-details-resolve.service';

const routes: Routes = [
    { path: "", redirectTo: "products-list", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    {
        path: "products-list", component: ProductHomeComponent, // Шаблон компонента ProductHomeComponent содержит свой <router-outlet> 
        children: [                                             // для определения маршрутов и компонентов для этого <router-outlet> используется свойство children
            { path: "", component: ProductListComponent },
            {
                path: ":id", component: ProductDetailsComponent,
                canDeactivate: [CanDeactivateGuardService],     // CanDeactivateGuardService - проверка возможности перенаправления с PhraseDetailsComponent на другой компонент.
                resolve: {                                      // Свойство resolve позволяет определить объект, который будет доступен в данных ActivatedRoute в компоненте, который получил пользователь.
                    resolvedProduct: ProductDetailsResolveService ,
                }
            } 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
