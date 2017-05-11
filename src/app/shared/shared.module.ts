import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from './shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  providers: [
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    FlexLayoutModule,
    SharedMaterialModule
  ]
})
export class SharedModule { }
