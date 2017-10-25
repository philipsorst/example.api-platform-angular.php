import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RestangularModule} from "ngx-restangular";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "../component/app/app.component";
import {BlogPostListComponent} from "../component/blogpost/blog-post-list.component";
import {BlogPostDetailComponent} from "../component/blogpost/blog-post-detail.component";
import {UserLoginComponent} from "../component/user/user-login.component";
import {NotFoundComponent} from "../component/util/not-found.component";
import {RestangularConfigFactory} from "../service/restangular.factory";
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "../service/auth.service";
import {UserEditComponent} from "../component/user/user-edit.component";
import {UserListComponent} from "../component/user/user-list.component";
import {UserService} from "../service/user.service";

@NgModule({
    declarations: [
        AppComponent,
        BlogPostListComponent,
        BlogPostDetailComponent,
        UserLoginComponent,
        UserEditComponent,
        UserListComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RestangularModule.forRoot(RestangularConfigFactory),
        AppRoutingModule
    ],
    providers: [
        AuthService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
