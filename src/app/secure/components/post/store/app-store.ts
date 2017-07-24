import { Post } from '../model';

import { posts, unpublishedPosts, samplePosts, postSaveStatus, userPosts } from './reducers';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

export interface AppStore {
  posts: Post[];
  unpublishedPosts: Post[];
  userPosts: Post[];
  samplePosts: Post[];
  postSaveStatus: string;
}

export default compose(combineReducers)({
  posts: posts,
  unpublishedPosts: unpublishedPosts,
  userPosts: userPosts,
  samplePosts: samplePosts,
  postSaveStatus: postSaveStatus
});
