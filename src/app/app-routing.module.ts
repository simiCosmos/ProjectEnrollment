import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/enroll/view-all',
    pathMatch: 'full',
  },
  {
    path:'enroll',
    component:LayoutComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./pages/enroll/enroll.module').then(m => m.EnrollModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
