import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {

  @ViewChild('menuButton') menuButton!: ElementRef;

  public menuExpanded = true;

  navitems = [
    { name: 'Proizvodni program', class: 'home', link: '/proizvodi/proizvodni-program' },
    { name: 'Reference', class: 'reference', link: '/reference' },
    { name: 'Kontakt', class: 'contact', link: '/kontakt' },
    { name: 'Motivacione mudrosti', class: 'books', link: '/motivacione-mudrosti' }
  ];

  toggleMenu() {
    this.menuExpanded = !this.menuExpanded;
  }
}
