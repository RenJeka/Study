import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './shared/backend.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductHomeComponent } from './product-home/product-home.component';
import { SettingsModule } from './settings/settings.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductDetailsComponent,
        ProductHomeComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SettingsModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(BackendService)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
