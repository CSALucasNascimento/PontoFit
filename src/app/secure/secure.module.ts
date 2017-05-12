import { NgModule } from '@angular/core';

import { SharedModule } from  '../shared/shared.module';
import { SecureRoutingModule } from  './routing/secure-routing.module';

import { DashboardComponent,
         AdminComponent,
         CategoriesComponent } from './components';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    CategoriesComponent
  ],
  imports: [
    //rwa modules
    SharedModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
