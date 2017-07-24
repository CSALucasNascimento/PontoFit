import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Store } from '@ngrx/store';

import { MockStore, TEST_DATA } from '../../../../testing';
import { PostActions } from './.';
import { Post } from '../model';
import { PostService } from './post.service';

describe('Service: PostService', () => {
  let postList: Post[] = [...TEST_DATA.posts.published, ...TEST_DATA.posts.published, ...TEST_DATA.posts.published];
  let MAX_SAMPLE_Qs_COUNT = 4;
  let afDbMock = {
    "list": () => Observable.of(postList),
    "object": () => null
  };

  //Define intial state and test state
  let _initialState = {};

  beforeEach(() => TestBed.configureTestingModule({
        providers: [
          PostService, PostActions,
          { "provide": Store, "useValue": new MockStore(_initialState) },
          { "provide": AngularFireDatabase, "useValue": afDbMock }
        ]
      })

  );

  it('Call getPosts to return Observable of Posts',
      inject([
            PostService
          ],
          (service: PostService) => {

            let qObs = service.getPosts();

            qObs.subscribe(posts => {
              expect(posts.length).toEqual(postList.length);
              expect(posts[0]).toEqual(postList[0]);
            });

          })
  );

  it('Call getUnpublishedPosts to return Observable of Posts',
      inject([
            PostService
          ],
          (service: PostService) => {

            let qObs = service.getUnpublishedPosts();

            qObs.subscribe(posts => {
              expect(posts.length).toEqual(postList.length);
              expect(posts[0]).toEqual(postList[0]);
            });

          })
  );

  it('Call getSamplePosts to return Observable of sample posts',
      inject([
            PostService, AngularFireDatabase
          ],
          (service: PostService, db: AngularFireDatabase) => {

            spyOn(db, 'list')
                .and.returnValue(Observable.of(postList.slice(0, 4)));
            let qObs = service.getSamplePosts();

            qObs.subscribe(posts => {
              expect(posts.length).toBeLessThanOrEqual(MAX_SAMPLE_Qs_COUNT);
            });
          })
  );

  it('Call getUserPosts to return Observable of Posts',
      inject([
            PostService, AngularFireDatabase
          ],
          (service: PostService, db: AngularFireDatabase) => {

            let qids = TEST_DATA.posts.published.map(q => q.id);
            spyOn(db, 'list')
                .and.returnValue(Observable.of(qids));
            spyOn(db, 'object')
                .and.returnValue(Observable.of(TEST_DATA.posts.published[0]));

            let qObs = service.getUserPosts(TEST_DATA.userList[0]);

            qObs.subscribe(posts => {
              expect(posts.length).toEqual(TEST_DATA.posts.published.length);
              expect(posts[0].id).toEqual(TEST_DATA.posts.published[0].id);
            });
          })
  );

  it('Call savePost to save a post',
      inject([
            PostService, AngularFireDatabase
          ],
          (service: PostService, db: AngularFireDatabase) => {

            let post = TEST_DATA.posts.published[0];
            spyOn(db, 'list')
                .and.returnValue({ "push": () => Promise.resolve(post) });

            let qObs = service.savePost(TEST_DATA.posts.published[0]);
            expect(db.list).toHaveBeenCalled();
          })
  );

  it('Call approvePost to save a post',
      inject([
            PostService, AngularFireDatabase
          ],
          (service: PostService, db: AngularFireDatabase) => {

            let post = TEST_DATA.posts.published[0];
            spyOn(db, 'object')
                .and.returnValue({ "update": () => Promise.resolve(post),
              "remove": () => null });

            let qObs = service.approvePost(TEST_DATA.posts.published[0]);
            expect(db.object).toHaveBeenCalled();
          })
  );

});
