import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { User } from '../../model/user';
import { Personal } from '../../model/personal';

import { user } from './reducers/user.reducer';
import { personal } from './reducers/personal.reducer';
import { loginRedirectUrl } from './reducers/ui-state.reducer';

export interface AppStore {
  user: User;
  personal: Personal;
  loginRedirectUrl: string;
}

export default compose(combineReducers)({
  user: user,
  personal: personal,
  loginRedirectUrl: loginRedirectUrl
});
