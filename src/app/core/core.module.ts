import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CONFIG } from '../../environments/environment';

import { AuthenticationService, AuthGuard, UserService } from './services';

import { UserActions, UIStateActions } from './store/actions';
import { UserEffects } from './store/effects';
import { default as reducer } from './store/app-store';

import { LoginComponent, PasswordAuthComponent } from './components';

import { SharedModule } from  '../shared/shared.module';

export const firebaseConfig: FirebaseAppConfig = CONFIG.firebaseConfig;

@NgModule({
  declarations: [
    LoginComponent, PasswordAuthComponent
  ],

  entryComponents: [
    LoginComponent, PasswordAuthComponent
  ],
  imports: [
    //firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    FormsModule,
    
    //store
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 20
    }),

    //ngrx effects
    EffectsModule.run(UserEffects),

    //rwa module
    SharedModule
  ],
  providers: [ 
    //Services
    AuthenticationService, AuthGuard, UserService,

    //Actions
    UserActions, UIStateActions

  ]
})
export class CoreModule { };
