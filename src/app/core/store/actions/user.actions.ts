import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {User} from '../../../model';

@Injectable()
export class UserActions {

  static LOGOFF = 'LOGOFF';
  logoff(): Action {
    return {
      type: UserActions.LOGOFF,
      payload: null
    };
  }

  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  loginSuccess(user: User): Action {
    return {
      type: UserActions.LOGIN_SUCCESS,
      payload: user
    };
  }

  static EDIT_USER_PROFILE = 'EDIT_USER_PROFILE';
  editUserProfile(user: User): Action {
    return {
      type: UserActions.EDIT_USER_PROFILE,
      payload: user
    };
  }

  static EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
  editUserSuccess(): Action {
    return {
      type: UserActions.EDIT_USER_SUCCESS,
      payload: null
    };
  }

  static ADD_USER_WITH_ROLES = 'ADD_USER_WITH_ROLES';
  addUserWithRoles(user: User): Action {
    return {
      type: UserActions.ADD_USER_WITH_ROLES,
      payload: user
    };
  }

}
