import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SecureRoutingModule } from './secure-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SecureComponent } from './secure.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
      
    SharedModule,
    SecureRoutingModule
  ],
  declarations: [
    DashboardComponent, 
    SecureComponent
  ]
})
export class SecureModule { }
