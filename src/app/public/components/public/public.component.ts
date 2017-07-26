import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../../../core/store/app-store';
import { PostStore } from '../../../secure/components/posts/store/post-store';
import { PostActions } from '../../../secure/components/posts/store/actions';

import { User } from '../../../model/user';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit, OnDestroy {

  user: User;
  sub: any;

  constructor(
    private appStore: Store<AppStore>,
    private postActions: PostActions,
    private postStore: Store<PostStore>
  ) {
    this.sub = appStore.select(s => s.user).subscribe(user => {
      this.user = user
    });

  }

  ngOnInit() {
    this.postStore.dispatch(this.postActions.loadPosts());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
