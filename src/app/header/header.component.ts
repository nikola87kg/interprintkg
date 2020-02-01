import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  @ViewChild('menuButton') menuButton: ElementRef;

  navitems = [
    { name: 'Proizvodni program', class: 'home', link: '/proizvodi/proizvodni-program' },
    { name: 'Reference', class: 'reference', link: '/reference' },
    { name: 'Kontakt', class: 'contact', link: '/kontakt' },
    { name: 'Motivacione mudrosti', class: 'books', link: '/motivacione-mudrosti' }
  ];

  ngOnInit() {
    this.menuButton.nativeElement.click();
  }
}
