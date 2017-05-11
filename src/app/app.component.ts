import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppStore } from './core/store/app-store';
import { User } from './model/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  user: User;
  sub2: any;

  constructor(public location: Location,
              public router: Router,
              private store: Store<AppStore>) {
    this.sub2 = store.select(s => s.user).subscribe(user => {
      this.user = user
      if (user)
      {
        console.log(user);
        let url: string;
        this.store.take(1).subscribe(s => url = s.loginRedirectUrl);
        if (url)
          this.router.navigate([url]);
      }
      else {
        //if user logsout then redirect to home page
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
    if (this.location.path() === '' || this.location.path() === '/home') {
      this.router.navigate(['/home']);
    }
  }

}
