import { User } from '../../model';

import { user, loginRedirectUrl } from './reducers';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

export interface AppStore {
  user: User;
  loginRedirectUrl: string;
}

export default compose(combineReducers)({
  user: user,
  loginRedirectUrl: loginRedirectUrl
});
