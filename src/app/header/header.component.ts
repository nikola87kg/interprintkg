import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent  {

  navitems = [
    {name: 'Početna',     class: 'home',      link: '/proizvodi/svi-proizvodi'},
    {name: 'Reference',   class: 'reference', link: '/reference'},
    {name: 'Kontakt',     class: 'contact',   link: '/kontakt'},
    {name: 'Motivacione mudrosti', class: 'books',  link: '/motivacione-mudrosti'}
  ];
}
