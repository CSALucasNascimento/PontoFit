import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

import { TEST_DATA } from '../../../../../testing/test.data';
import { MockStore } from '../../../../../testing/mock-store';
import { PostEffects } from './post.effects';
import { PostActions } from './.';
import { PostService } from '../../services';

describe('Effects: PostEffects', () => {
  let _runner: EffectsRunner;
  let _effects: PostEffects;
  let _service: PostService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      PostEffects, PostActions, PostService,
      { "provide": AngularFire, "useValue": {} },
      { "provide": Store, "useValue": new MockStore({}) }
    ]
  }));

  it('Call Load Posts Success action after Load Posts',
      inject([
            EffectsRunner, PostEffects, PostService
          ],
          (runner, postEffects, postService) => {
            _runner = runner;
            _effects = postEffects;
            _service = postService;

            spyOn(_service, 'getPosts')
                .and.returnValue(Observable.of(TEST_DATA.posts.published));

            _runner.queue({ type: PostActions.LOAD_POSTS });

            _effects.loadPosts$.subscribe(result => {
              expect(result.type).toEqual(PostActions.LOAD_POSTS_SUCCESS);
              expect(result.payload).toEqual(TEST_DATA.posts.published);
            });
          })
  );

  it('Call Load Unpublished Posts Success action after Load  Unpublished Posts',
      inject([
            EffectsRunner, PostEffects, PostService
          ],
          (runner, postEffects, postService) => {
            _runner = runner;
            _effects = postEffects;
            _service = postService;

            spyOn(_service, 'getUnpublishedPosts')
                .and.returnValue(Observable.of(TEST_DATA.posts.published));

            _runner.queue({ type: PostActions.LOAD_UNPUBLISHED_POSTS });

            _effects.loadUnpublishedPosts$.subscribe(result => {
              expect(result.type).toEqual(PostActions.LOAD_UNPUBLISHED_POSTS_SUCCESS);
              expect(result.payload).toEqual(TEST_DATA.posts.published);
            });
          })
  );

  it('Call Load User Posts Success action after Load  User Posts',
      inject([
            EffectsRunner, PostEffects, PostService
          ],
          (runner, postEffects, postService) => {
            _runner = runner;
            _effects = postEffects;
            _service = postService;

            spyOn(_service, 'getUserPosts')
                .and.returnValue(Observable.of(TEST_DATA.posts.published));

            _runner.queue({ type: PostActions.LOAD_USER_POSTS });

            _effects.loadUserPosts$.subscribe(result => {
              expect(result.type).toEqual(PostActions.LOAD_USER_POSTS_SUCCESS);
              expect(result.payload).toEqual(TEST_DATA.posts.published);
            });

          })
  );

  it('Call Load Sample Posts Success action after Load Sample Posts',
      inject([
            EffectsRunner, PostEffects, PostService
          ],
          (runner, postEffects, postService) => {
            _runner = runner;
            _effects = postEffects;
            _service = postService;

            spyOn(_service, 'getSamplePosts')
                .and.returnValue(Observable.of(TEST_DATA.posts.published));

            _runner.queue({ type: PostActions.LOAD_SAMPLE_POSTS });

            _effects.loadSamplePosts$.subscribe(result => {
              expect(result.type).toEqual(PostActions.LOAD_SAMPLE_POSTS_SUCCESS);
              expect(result.payload).toEqual(TEST_DATA.posts.published);
            });
          })
  );

  it('Call Save Post service after when adding Post',
      inject([
            EffectsRunner, PostEffects, PostService
          ],
          (runner, postEffects, postService) => {
            _runner = runner;
            _effects = postEffects;
            _service = postService;

            spyOn(_service, 'savePost')
                .and.returnValue(Observable.of(TEST_DATA.posts.published[0]));

            _runner.queue({ type: PostActions.ADD_POST });

            _effects.addPost$.subscribe(result => {
              expect(result).toEqual(false);
              expect(result.payload).toEqual(null);
            });
          })
  );

  it('Call Approve Post service after when calling approve Post',
      inject([
            EffectsRunner, PostEffects, PostService
          ],
          (runner, postEffects, postService) => {
            _runner = runner;
            _effects = postEffects;
            _service = postService;

            spyOn(_service, 'approvePost')
                .and.returnValue(Observable.of(TEST_DATA.posts.published[0]));

            _runner.queue({ type: PostActions.APPROVE_POST });

            _effects.approvePost$.subscribe(result => {
              expect(result).toEqual(false);
              expect(result.payload).toEqual(null);
            });
          })
  );

});
