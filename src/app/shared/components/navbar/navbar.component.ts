import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../../../core/store/app-store';
import { AuthenticationService } from '../../../core/services/authentication.service';

import { User } from '../../../model/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;
  sub: any;

  constructor(private store: Store<AppStore>,
              private authService: AuthenticationService) {
    this.sub = store.select(s => s.user).subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

}
