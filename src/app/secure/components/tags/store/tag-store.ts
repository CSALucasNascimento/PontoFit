import { Tag } from '../model';

import { tags } from './reducers';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

export interface TagStore {
  tags: Tag[];
}

export default compose(combineReducers)({
  tags: tags
});
