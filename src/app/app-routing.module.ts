import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./modules/pages/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path:'projects',
        loadChildren: () => import('./modules/pages/projects/projects.module').then(m => m.ProjectsModule)
      }
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
