import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogPostListComponent} from "../../component/blogpost/blog-post-list.component";
import {BlogPostDetailComponent} from "../../component/blogpost/blog-post-detail.component";
import {UserLoginComponent} from "../../component/user/user-login.component";

const routes: Routes = [
    {path: '', redirectTo: 'posts', pathMatch: 'full'},
    {path: 'posts', component: BlogPostListComponent},
    {path: 'posts/:id', component: BlogPostDetailComponent},
    {path: 'login', component: UserLoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
