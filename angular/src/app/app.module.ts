import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RestangularModule} from "ngx-restangular";
import {AppRoutingModule} from "./module/routing/app-routing.module";
import {RestangularConfigFactory} from "./service/restangular.factory";
import {BlogPostListComponent} from "./component/blogpost/blog-post-list.component";
import {BlogPostDetailComponent} from "./component/blogpost/blog-post-detail.component";
import {UserLoginComponent} from "./component/user/user-login.component";
import {NotFoundComponent} from "./component/util/not-found.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./service/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        BlogPostListComponent,
        BlogPostDetailComponent,
        UserLoginComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RestangularModule.forRoot(RestangularConfigFactory),
        AppRoutingModule
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
