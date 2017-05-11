import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'secure', component: SecureComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}