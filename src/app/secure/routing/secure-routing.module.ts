import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';

import { secureRoutes }   from './secure.route';

@NgModule({
  imports: [
    RouterModule.forChild(secureRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SecureRoutingModule { }
