import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { AppStore } from '../../../core/store/app-store';
import { User } from '../../../model';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit, OnDestroy {

  user: User;
  sub: any;

  constructor(
    private appStore: Store<AppStore>,
    private router: Router
  ) {
    this.sub = appStore.select(s => s.user).subscribe(user => {
      if (!user || !user.roles["admin"])
        this.router.navigate(['/']);

      this.user = user
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

}
