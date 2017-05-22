import { NgModule } from '@angular/core';

import { SharedModule } from  '../shared/shared.module';
import { SecureRoutingModule } from  './routing/secure-routing.module';

import {
    DashboardComponent,
    SecureComponent } from './components';

@NgModule({
  declarations: [
    DashboardComponent,
    SecureComponent
  ],
  imports: [
    SharedModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
