import { Component, OnInit } from '@angular/core';
import { faBars, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    faBars = faBars;
    faSortDown = faSortDown;
    isCollapsed = true;

    constructor(private router: Router) { }

    ngOnInit() { }

    toggleSidebar() { }

    logout(event: any) {
        event.preventDefault();
        this.router.navigate(['/login']);
    }
}