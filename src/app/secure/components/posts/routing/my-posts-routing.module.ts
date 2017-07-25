import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { myPostsRoutes } from './my-posts.route';

@NgModule({
  imports: [
    RouterModule.forChild(myPostsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MyPostsRoutingModule { }
