import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-mudremisli',
  templateUrl: './mudremisli.component.html'
})
export class MudremisliComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
    this.inactiveColor();
    }
  
  inactiveColor() {
    $(".nav-link.active").parent().parent().children().children().removeClass("active")
  }

}
