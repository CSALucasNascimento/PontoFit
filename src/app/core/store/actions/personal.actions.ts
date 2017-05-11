import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Personal} from '../../../model/personal';

@Injectable()
export class PersonalActions {

  static LOGOFF = 'LOGOFF';
  logoff(): Action {
    return {
      type: PersonalActions.LOGOFF,
      payload: null
    };
  }

  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  loginSuccess(personal: Personal): Action {
    return {
      type: PersonalActions.LOGIN_SUCCESS,
      payload: personal
    };
  }

}
