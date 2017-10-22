import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html'
})
export class ReferencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.inactiveColor();
    }

  inactiveColor() {
    $('.nav-link.active').parent().parent().children().children().removeClass('active');
  }

}
