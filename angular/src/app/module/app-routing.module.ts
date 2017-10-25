import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogPostListComponent} from "../component/blogpost/blog-post-list.component";
import {BlogPostDetailComponent} from "../component/blogpost/blog-post-detail.component";
import {UserLoginComponent} from "../component/user/user-login.component";
import {NotFoundComponent} from "../component/util/not-found.component";
import {UserEditComponent} from "../component/user/user-edit.component";
import {UserListComponent} from "../component/user/user-list.component";

const routes: Routes = [
    {path: '', redirectTo: '/posts', pathMatch: 'full'},
    {path: 'posts', component: BlogPostListComponent},
    {path: 'posts/:id', component: BlogPostDetailComponent},
    {path: 'login', component: UserLoginComponent},
    {path: 'users', component: UserListComponent},
    {path: 'users/:id/edit', component: UserEditComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
