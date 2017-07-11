import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from './shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent, SidebarComponent, FooterComponent } from './components';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    // Forms
    ReactiveFormsModule,
    FormsModule,

    //Material
    SharedMaterialModule,

    //Flex
    FlexLayoutModule

  ],
  providers: [
  ],
  exports:  [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    SharedMaterialModule
  ]
})
export class SharedModule { }
