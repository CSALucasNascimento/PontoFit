import { Routes }  from '@angular/router';
import { PublicComponent, DashboardComponent, HomeComponent } from '../components/index';

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];
