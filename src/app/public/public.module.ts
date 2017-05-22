import { NgModule } from '@angular/core';

import { SharedModule } from  '../shared/shared.module';
import { PublicRoutingModule } from  './routing/public-routing.module';

import {
    PublicComponent,
    DashboardComponent,
    HomeComponent } from './components';

@NgModule({
  declarations: [
    PublicComponent,
    DashboardComponent, 
    HomeComponent
  ],
  imports: [
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
