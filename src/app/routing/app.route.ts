import { Routes, RouterModule }  from '@angular/router';
import { DashboardComponent }
  from '../components/index';
import { AuthGuard } from '../core/services';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin',
    loadChildren: 'app/secure/secure.module#SecureModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }
];
