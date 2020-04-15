import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsSettingsComponent } from './products-settings/products-settings.component';
import { UsersSettingsComponent } from './users-settings/users-settings.component';

@NgModule({
  declarations: [HomeComponent, ProductsSettingsComponent, UsersSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
