import { NgModule } from '@angular/core';

import { SharedModule } from  '../shared/shared.module';
import { SecureRoutingModule } from  './routing/secure-routing.module';

import { DashboardComponent,
         AdminComponent,
         CategoriesComponent,
         AdminQuestionsComponent } from './components';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    CategoriesComponent,
    AdminQuestionsComponent
  ],
  imports: [
    //rwa modules
    SharedModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
