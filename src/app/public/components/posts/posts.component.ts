import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';

import { Post, PostStatus }     from '../../../secure/components/posts/model';

@Component({
  selector: 'post-list',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  @Input() posts: Post[];
  @Input() showApproveButton: boolean;
  @Output() approveClicked = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  getDisplayStatus(status: number): string {
    return PostStatus[status];
  }
  approveButtonClicked(post: Post ) {
    this.approveClicked.emit(post)
  }
}
