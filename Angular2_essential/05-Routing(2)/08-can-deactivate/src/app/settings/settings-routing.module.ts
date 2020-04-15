import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsSettingsComponent } from './products-settings/products-settings.component';
import { UsersSettingsComponent } from './users-settings/users-settings.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from '../shared/auth-guard.service';

const routes: Routes = [
    {
        path: "settings", component: HomeComponent,
        canActivate: [AuthGuardService], // если Guard вернет false маршрут не активируется.
        //canActivateChild: [AuthGuardService], // если Guard вернет false дочерние маршруты не активируются.
        
        children: [
            { path: "products", component: ProductsSettingsComponent },
            { path: "users", component: UsersSettingsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
