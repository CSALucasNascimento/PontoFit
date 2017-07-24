import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { PostActions } from '../actions';
import { Post } from '../../model';

export const posts = (state: any = [], action: Action): Post[] => {
  switch (action.type) {
    case PostActions.LOAD_POSTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const unpublishedPosts = (state: any = [], action: Action): Post[] => {
  switch (action.type) {
    case PostActions.LOAD_UNPUBLISHED_POSTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const userPosts = (state: any = [], action: Action): Post[] => {
  switch (action.type) {
    case PostActions.LOAD_USER_POSTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const samplePosts = (state: any = [], action: Action): Post[] => {
  switch (action.type) {
    case PostActions.LOAD_SAMPLE_POSTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const postSaveStatus = (state: any = "NONE", action: Action): string => {
  switch (action.type) {
    case PostActions.ADD_POST:
      return "IN PROGRESS";
    case PostActions.ADD_POST_SUCCESS:
      return "SUCCESS";
    default:
      return state;
  }
};
