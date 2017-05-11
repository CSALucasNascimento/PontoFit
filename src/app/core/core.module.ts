import { NgModule, ModuleWithProviders } from '@angular/core';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CONFIG } from '../../environments/environment';

import { AuthenticationService, AuthGuard } from './services';

import { UserActions, UIStateActions } from './store/actions';
import { default as reducer } from './store/app-store';

import { SigninComponent } from '../public/signin/signin.component';
import { SignupComponent } from '../public/signup/signup.component';

import { SharedModule } from  '../shared/shared.module';

export const firebaseConfig: FirebaseAppConfig = CONFIG.firebaseConfig;

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],

  entryComponents: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    //firebase
    AngularFireModule.initializeApp(firebaseConfig),

    //store
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 20
    }),

    SharedModule
  ],
  providers: [
    //Services
    AuthenticationService, AuthGuard,

    //Actions
    UserActions, UIStateActions

  ]
})
export class CoreModule { };
