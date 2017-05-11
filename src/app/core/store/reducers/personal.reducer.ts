import {Action} from '@ngrx/store';

import {PersonalActions} from '../actions';
import {Personal} from '../../../model/personal';

export const personal = (state: any = null, action: Action): Personal => {
  switch (action.type) {
    case PersonalActions.LOGOFF:
      return null;
    default:
      return state;
  }
};
