import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { PostStore } from '../post-store';
import { PostActions } from '../actions';
import { Post } from '../../model';
import { PostService } from '../../services';

@Injectable()
export class PostEffects {
    constructor (
        private actions$: Actions,
        private postActions: PostActions,
        private svc: PostService
    ) {}

    @Effect()
    loadPosts$ = this.actions$
        .ofType(PostActions.LOAD_POSTS)
        .switchMap(() => this.svc.getPosts())
        .map((posts: Post[]) => this.postActions.loadPostsSuccess(posts));

    @Effect()
    loadUnpublishedPosts$ = this.actions$
        .ofType(PostActions.LOAD_UNPUBLISHED_POSTS)
        .switchMap(() => this.svc.getUnpublishedPosts())
        .map((posts: Post[]) => this.postActions.loadUnpublishedPostsSuccess(posts));

    @Effect()
    loadUserPosts$ = this.actions$
        .ofType(PostActions.LOAD_USER_POSTS)
        .switchMap((action) => this.svc.getUserPosts(action.payload))
        .map((posts: Post[]) => this.postActions.loadUserPostsSuccess(posts));

    @Effect()
    loadSamplePosts$ = this.actions$
        .ofType(PostActions.LOAD_SAMPLE_POSTS)
        .switchMap(() => this.svc.getSamplePosts())
        .map((posts: Post[]) => this.postActions.loadSamplePostsSuccess(posts));

    @Effect()
    addPost$ = this.actions$
        .ofType(PostActions.ADD_POST)
        .do((action) => this.svc.savePost(action.payload))
        .filter(() => false);

    @Effect()
    approvePost$ = this.actions$
        .ofType(PostActions.APPROVE_POST)
        .do((action) => this.svc.approvePost(action.payload))
        .filter(() => false);

    @Effect()
    editPost$ = this.actions$
        .ofType(PostActions.EDIT_POST)
        .do((action) => this.svc.editPost(action.payload))
        .filter(() => false);
}
