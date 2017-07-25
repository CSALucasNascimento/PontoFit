import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { AppStore } from '../app-store';
import { UserActions } from '../actions';
import { User } from '../../../model';
import { AuthenticationService, UserService } from '../../services';

@Injectable()
export class UserEffects {
    constructor (
        private actions$: Actions,
        private userActions: UserActions,
        private svc: UserService
    ) {}

    @Effect()
    loadUserRoles$ = this.actions$
        .ofType(UserActions.LOGIN_SUCCESS)
        .map((action) => action.payload)
        .switchMap((user: User) => this.svc.getUserRoles(user))
        .map((user: User) => this.userActions.addUserWithRoles(user));

    @Effect()
    editUserProfile$ = this.actions$
        .ofType(UserActions.EDIT_USER_PROFILE)
        .do((action) => this.svc.editUserProfile(action.payload))
        .filter(() => false);
}
