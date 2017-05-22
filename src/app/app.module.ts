import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RoutingModule } from  './routing/routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from  './shared/shared.module';
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //rwa modules
    RoutingModule,
    CoreModule,
    SecureModule,
    SharedModule,
    PublicModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
