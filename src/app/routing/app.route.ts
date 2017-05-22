import { Routes }  from '@angular/router';

import { AuthGuard } from '../core/services';

import { PublicComponent } from '../public/components';
import { SecureComponent } from '../secure/components'

export const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
  },
  {
    path: 'admin',
    component: SecureComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }
];
