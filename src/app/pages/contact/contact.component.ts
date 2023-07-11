import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  lat = 44.04716376;
  lng = 20.9131693;
  zoom = 15;
  hue = 'red';

  constructor() { }

  ngOnInit() {
    this.inactiveColor();
    }

  inactiveColor() {
    $('.nav-link.active').parent().parent().children().children().removeClass('active');
  }
}
