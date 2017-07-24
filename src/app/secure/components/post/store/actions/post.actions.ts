import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import { Post } from '../../model';
import { User } from '../../../../../model';

@Injectable()
export class PostActions {

  static LOAD_POSTS = 'LOAD_POSTS';
  loadPosts(): Action {
    return {
      type: PostActions.LOAD_POSTS
    };
  }

  static LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
  loadPostsSuccess(posts: Post[]): Action {
    return {
      type: PostActions.LOAD_POSTS_SUCCESS,
      payload: posts
    };
  }

  static LOAD_UNPUBLISHED_POSTS = 'LOAD_UNPUBLISHED_POSTS';
  loadUnpublishedPosts(): Action {
    return {
      type: PostActions.LOAD_UNPUBLISHED_POSTS
    };
  }

  static LOAD_UNPUBLISHED_POSTS_SUCCESS = 'LOAD_UNPUBLISHED_POSTS_SUCCESS';
  loadUnpublishedPostsSuccess(posts: Post[]): Action {
    return {
      type: PostActions.LOAD_UNPUBLISHED_POSTS_SUCCESS,
      payload: posts
    };
  }

  static LOAD_USER_POSTS = 'LOAD_USER_POSTS';
  loadUserPosts(user: User): Action {
    return {
      type: PostActions.LOAD_USER_POSTS,
      payload: user
    };
  }

  static LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
  loadUserPostsSuccess(posts: Post[]): Action {
    return {
      type: PostActions.LOAD_USER_POSTS_SUCCESS,
      payload: posts
    };
  }

  static LOAD_SAMPLE_POSTS = 'LOAD_SAMPLE_POSTS';
  loadSamplePosts(): Action {
    return {
      type: PostActions.LOAD_SAMPLE_POSTS
    };
  }

  static LOAD_SAMPLE_POSTS_SUCCESS = 'LOAD_SAMPLE_POSTS_SUCCESS';
  loadSamplePostsSuccess(posts: Post[]): Action {
    return {
      type: PostActions.LOAD_SAMPLE_POSTS_SUCCESS,
      payload: posts
    };
  }

  static ADD_POST = 'ADD_POST';
  addPost(post: Post): Action {
    return {
      type: PostActions.ADD_POST,
      payload: post
    };
  }

  static ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
  addPostSuccess(): Action {
    return {
      type: PostActions.ADD_POST_SUCCESS,
      payload: null
    };
  }

  static EDIT_POST = 'EDIT_POST';
  editPost(post: Post): Action {
    return {
      type: PostActions.EDIT_POST,
      payload: post
    };
  }

  static EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
  editPostSuccess(): Action {
    return {
      type: PostActions.EDIT_POST_SUCCESS,
      payload: null
    };
  }

  static APPROVE_POST = 'APPROVE_POST';
  approvePost(post: Post): Action {
    return {
      type: PostActions.APPROVE_POST,
      payload: post
    };
  }

}
