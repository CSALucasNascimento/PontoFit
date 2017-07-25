import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { TagStore } from '../tags/store/tag-store';
import { TagActions } from '../tags/store/actions';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  constructor(
      private tagActions: TagActions,
      private tagStore: Store<TagStore>
  ) {
  }

  ngOnInit() {
    this.tagStore.dispatch(this.tagActions.loadTags());
  }

}
