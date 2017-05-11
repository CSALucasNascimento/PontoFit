import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
      
    SharedModule,
    PublicRoutingModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent
  ]
})
export class PublicModule { }
