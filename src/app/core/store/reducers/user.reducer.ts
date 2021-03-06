import { Observable } from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import {UserActions} from '../actions';
import {User} from '../../../model';

export const user = (state: any = null, action: Action): User => {
  switch (action.type) {
    case UserActions.LOGOFF:
    case UserActions.EDIT_USER_SUCCESS:
      return null;
    case UserActions.LOGIN_SUCCESS:
    case UserActions.EDIT_USER_PROFILE:
    case UserActions.ADD_USER_WITH_ROLES:
      return action.payload;
    default:
      return state;
  }
};
