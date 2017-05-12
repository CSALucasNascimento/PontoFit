import { Routes, RouterModule }  from '@angular/router';
import { DashboardComponent, CategoriesComponent,
         AdminQuestionsComponent, AdminComponent }
  from '../components/index';
import { AuthGuard } from '../../core/services';

export const secureRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'questions',
        component: AdminQuestionsComponent
      }

    ]
  }
];
