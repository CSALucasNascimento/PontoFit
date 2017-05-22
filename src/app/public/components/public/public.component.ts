import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../../../core/store/app-store';

import { User } from '../../../model/user';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  user: User;
  sub: any;

  constructor(
      private store: Store<AppStore>) {
    this.sub = store.select(s => s.user).subscribe(user => {
      this.user = user
    });

  }

  ngOnInit() {
  }
  
}
