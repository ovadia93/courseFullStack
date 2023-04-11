import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UtilityService } from '../utility.service';
import { Nav } from './navbar.interface';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    active: string = '';
    isOpen: boolean = false;
    utility: any;

    menu: Nav[] = [
        // { route: '/', title: 'בית', icon: 'home' },
        { route: '/customers', title: 'לקוחות', icon: 'customers' },
        
    ];

    sidebar: Nav[] = [
        ...this.menu,
        
    ];

    constructor(router: Router, utility: UtilityService) {
        this.utility = utility;

        router.events.subscribe(ev => {
            if (ev instanceof NavigationStart) {
                this.active = ev.url;
                this.isOpen = false;
            }
        });

    }

    ngOnInit() {
    }

}