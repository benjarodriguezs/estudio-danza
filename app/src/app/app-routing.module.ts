import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'alumnos',
        loadChildren: () => import('./modules/alumnos/alumnos.module').then(m => m.AlumnosModule),
      },
    ],
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
