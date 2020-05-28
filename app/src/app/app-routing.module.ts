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
        path: 'consultas',
        loadChildren: () => import('./modules/consultas/consultas.module').then(m => m.ConsultasModule),
      },
      {
        path: 'pagos',
        loadChildren: () => import('./modules/pagos/pagos.module').then(m => m.PagosModule),
      },
      {
        path: 'administracion',
        loadChildren: () => import('./modules/administracion/administracion.module').then(m => m.AdministracionModule),
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
