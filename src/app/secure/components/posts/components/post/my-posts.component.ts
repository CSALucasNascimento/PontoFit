import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { PostStore } from '../../store/post-store';
import { PostActions } from '../../store/actions';
import { Post }     from '../../model';
import { User }     from '../../../../../model';

@Component({
  selector: 'my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit, OnDestroy {

  postsObs: Observable<Post[]>;
  // categoryDictObs: Observable<{[key: number]: Category}>;
  user: User;

  constructor(private store: Store<PostStore>,
              private postActions: PostActions) {
    this.postsObs = store.select(s => s.userPosts);
    // this.categoryDictObs = store.select(s => s.categoryDictionary);
  }

  ngOnInit() {
    this.store.take(1).subscribe(s => this.user = s.user);
    this.store.dispatch(this.postActions.loadUserPosts(this.user));
  }

  ngOnDestroy() {
  }

}
