import { NgModule } from '@angular/core';

import { SharedModule } from  '../shared/shared.module';
import { PublicRoutingModule } from  './routing/public-routing.module';

import {
  PublicComponent,
  DashboardComponent,
  HomeComponent,
  PostsComponent } from './components';

@NgModule({
  declarations: [
    PublicComponent,
    DashboardComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    SharedModule,
    PublicRoutingModule
  ],
  providers: [
  ],
  exports: [
    PostsComponent
  ]
})
export class PublicModule { }
