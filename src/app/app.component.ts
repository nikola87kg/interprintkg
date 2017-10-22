import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

 declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class AppComponent implements OnInit {
    constructor(private router: Router, private titleService: Title) { }

    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
      }

    ngOnInit() {
        this.closeNavigation();
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    closeNavigation() {
        $('.nav-item, .nav-link').click(function(){
            $('.navbar-collapse').removeClass('show');
        });
    }
}
