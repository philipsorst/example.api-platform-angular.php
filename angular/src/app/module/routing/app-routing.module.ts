import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'posts', pathMatch: 'full'}
    // {path: 'subjects', component: SubjectListComponent},
    // {path: 'subjects/:id', component: SubjectDetailComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
