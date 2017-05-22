import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
      public location: Location,
      public router: Router) {
  }

  ngOnInit() {
    if (this.location.path() === '' || this.location.path() === 'home') {
      this.router.navigate(['/home']);
    }
  }
  
}
