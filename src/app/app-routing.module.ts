import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsListComponent } from './main-page/jobs-list/jobs-list.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path:'main-page',component:JobsListComponent},
  {path:'app-test',component:TestComponent},
  { path:'',   redirectTo: '/main-page', pathMatch: 'full'}, 
  {path:'**',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
