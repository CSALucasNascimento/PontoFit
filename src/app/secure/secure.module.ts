import { NgModule } from '@angular/core';

import { SharedModule } from  '../shared/shared.module';
import { SecureRoutingModule } from  './routing/secure-routing.module';
import { PostsModule } from './components/posts/posts.module';
import { TagsModule } from './components/tags/tags.module';

import {
    DashboardComponent,
    SecureComponent,
    ProfileComponent
} from './components';

@NgModule({
  declarations: [
    DashboardComponent,
    SecureComponent,
    ProfileComponent
  ],
  imports: [
    SharedModule,
    SecureRoutingModule,
    PostsModule,
    TagsModule
  ]
})
export class SecureModule { }
