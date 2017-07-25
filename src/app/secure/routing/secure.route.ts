import { Routes }  from '@angular/router';
import { DashboardComponent, SecureComponent, ProfileComponent }from '../components/index';
import { AuthGuard } from '../../core/services';

export const secureRoutes: Routes = [
  {
    path: '',
    component: SecureComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
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
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'posts',
        loadChildren: 'app/secure/components/posts/posts.module#PostsModule',
      }
    ]
  }
];
