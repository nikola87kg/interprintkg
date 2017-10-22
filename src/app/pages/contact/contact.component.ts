import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  constructor() { }

  lat: number = 44.0308151;
  lng: number = 20.9172295;
  zoom: number = 14;
  hue:string = "red";
  
  
  ngOnInit() {
    this.inactiveColor();
    }
  
  inactiveColor() {
    $(".nav-link.active").parent().parent().children().children().removeClass("active")
  }
}
