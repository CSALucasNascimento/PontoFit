import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }     from '@angular/forms';

import { SharedMaterialModule } from './shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './components';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,

    // Forms
    ReactiveFormsModule,

    //Material
    SharedMaterialModule,

    //Flex
    FlexLayoutModule

  ],
  providers: [
  ],
  exports:  [
    NavbarComponent,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedMaterialModule
  ]
})
export class SharedModule { }
