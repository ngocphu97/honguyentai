import { Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: './core/core.module#CoreModule'
  },
  {
    path: '**',
    redirectTo: '/trang-chu',
    pathMatch: 'full'
  },
];
