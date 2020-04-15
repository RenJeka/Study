import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './shared/backend.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductHomeComponent } from './product-home/product-home.component';
import { SettingsModule } from './settings/settings.module';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductDetailsComponent,
        ProductHomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SettingsModule,
        InMemoryWebApiModule.forRoot(BackendService)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
