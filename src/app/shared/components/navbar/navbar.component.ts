import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthenticationService } from '../../../core/services';

import { AppStore } from '../../../core/store/app-store';

import { User } from '../../../model/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;
  sub: any;

  constructor(
      private authService: AuthenticationService,
      private store: Store<AppStore>) {

    this.sub = store.select(s => s.user).subscribe(user => {
      this.user = user
    });

  }

  ngOnInit() {
  }

  getTitle(){
    return 'Dashboard';
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

  login() {
    this.authService.ensureLogin();
  }

  logout() {
    this.authService.logout();
  }
  
}
