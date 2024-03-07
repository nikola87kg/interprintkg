import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  lat = 44.04716376;
  lng = 20.9131693;
  zoom = 15;
  hue = 'red';
  public mail = `interprintkg@gmail.com`;

  constructor() { }

  ngOnInit() {
    this.inactiveColor();
    this.initMap();

  }

  inactiveColor() {
    $('.nav-link.active').parent().parent().children().children().removeClass('active');
  }

  initMap() {
    // Create a map object and specify the DOM element for display.
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: this.lat, lng: this.lng },
      zoom: this.zoom,
      disableDefaultUI: false,
      zoomControl: true,
      gestureHandling: "greedy",
    });

    // Create a marker and set its position.
    new google.maps.Marker({
      map: map,
      position: { lat: this.lat, lng: this.lng },
      title: 'InterPrint'
    });

    new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "red",
      fillOpacity: 0.35,
      map: map,
      center: { lat: this.lat, lng: this.lng },
      circleDraggable: false,
      editable: false,
      radius: 30,
    });

  }

}
