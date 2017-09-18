import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RestangularModule} from "ngx-restangular";
import {RestangularConfigFactory} from "./restangular.factory";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RestangularModule.forRoot(RestangularConfigFactory)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
