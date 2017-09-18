import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RestangularModule} from "ngx-restangular";
import {RestangularConfigFactory} from "./restangular.factory";
import {AppRoutingModule} from "./module/routing/app-routing.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RestangularModule.forRoot(RestangularConfigFactory),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
