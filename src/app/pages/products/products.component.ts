import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.inactiveColor();
    }

  inactiveColor() {
    $('.nav-link.active').parent().parent().children().children().removeClass('active');
  }

}
