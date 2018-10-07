import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  lat = 44.0308151;
  lng = 20.9172295;
  zoom = 14;
  hue = 'red';

  constructor() { }

  ngOnInit() {
    this.inactiveColor();
    }

  inactiveColor() {
    $('.nav-link.active').parent().parent().children().children().removeClass('active');
  }
}
