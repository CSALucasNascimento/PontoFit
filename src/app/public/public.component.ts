import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('src/assets/js/initMenu.js');
  }

}
