import { Routes, RouterModule }  from '@angular/router';
import { MyPostsComponent, PostAddUpdateComponent } 
  from '../components';
import { AuthGuard } from '../../../../core/services';

export const myPostsRoutes: Routes = [
  {
    path: '',
    component: MyPostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    component: PostAddUpdateComponent,
    canActivate: [AuthGuard]
  },
];
