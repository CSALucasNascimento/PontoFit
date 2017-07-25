import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Store } from '@ngrx/store';

import { MockStore, TEST_DATA } from '../../../../testing';
import { TagActions } from './.';
import { Tag } from '../model';
import { TagService } from './tag.service';

describe('Service: TagService', () => {
  let tagList: Tag[] = [...TEST_DATA.tags.published, ...TEST_DATA.tags.published, ...TEST_DATA.tags.published];
  let MAX_SAMPLE_Qs_COUNT = 4;
  let afDbMock = {
    "list": () => Observable.of(tagList),
    "object": () => null
  };

  //Define intial state and test state
  let _initialState = {};

  beforeEach(() => TestBed.configureTestingModule({
        providers: [
          TagService, TagActions,
          { "provide": Store, "useValue": new MockStore(_initialState) },
          { "provide": AngularFireDatabase, "useValue": afDbMock }
        ]
      })

  );

  it('Call getTags to return Observable of Tags',
      inject([
            TagService
          ],
          (service: TagService) => {

            let qObs = service.getTags();

            qObs.subscribe(tags => {
              expect(tags.length).toEqual(tagList.length);
              expect(tags[0]).toEqual(tagList[0]);
            });

          })
  );

  it('Call getUnpublishedTags to return Observable of Tags',
      inject([
            TagService
          ],
          (service: TagService) => {

            let qObs = service.getUnpublishedTags();

            qObs.subscribe(tags => {
              expect(tags.length).toEqual(tagList.length);
              expect(tags[0]).toEqual(tagList[0]);
            });

          })
  );

  it('Call getSampleTags to return Observable of sample tags',
      inject([
            TagService, AngularFireDatabase
          ],
          (service: TagService, db: AngularFireDatabase) => {

            spyOn(db, 'list')
                .and.returnValue(Observable.of(tagList.slice(0, 4)));
            let qObs = service.getSampleTags();

            qObs.subscribe(tags => {
              expect(tags.length).toBeLessThanOrEqual(MAX_SAMPLE_Qs_COUNT);
            });
          })
  );

  it('Call getUserTags to return Observable of Tags',
      inject([
            TagService, AngularFireDatabase
          ],
          (service: TagService, db: AngularFireDatabase) => {

            let qids = TEST_DATA.tags.published.map(q => q.id);
            spyOn(db, 'list')
                .and.returnValue(Observable.of(qids));
            spyOn(db, 'object')
                .and.returnValue(Observable.of(TEST_DATA.tags.published[0]));

            let qObs = service.getUserTags(TEST_DATA.userList[0]);

            qObs.subscribe(tags => {
              expect(tags.length).toEqual(TEST_DATA.tags.published.length);
              expect(tags[0].id).toEqual(TEST_DATA.tags.published[0].id);
            });
          })
  );

  it('Call saveTag to save a tag',
      inject([
            TagService, AngularFireDatabase
          ],
          (service: TagService, db: AngularFireDatabase) => {

            let tag = TEST_DATA.tags.published[0];
            spyOn(db, 'list')
                .and.returnValue({ "push": () => Promise.resolve(tag) });

            let qObs = service.saveTag(TEST_DATA.tags.published[0]);
            expect(db.list).toHaveBeenCalled();
          })
  );

  it('Call approveTag to save a tag',
      inject([
            TagService, AngularFireDatabase
          ],
          (service: TagService, db: AngularFireDatabase) => {

            let tag = TEST_DATA.tags.published[0];
            spyOn(db, 'object')
                .and.returnValue({ "update": () => Promise.resolve(tag),
              "remove": () => null });

            let qObs = service.approveTag(TEST_DATA.tags.published[0]);
            expect(db.object).toHaveBeenCalled();
          })
  );

});
