import { OnInit, Component } from '@angular/core';
import { faAmbulance, faTags } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    faAmbulance = faAmbulance;
    faTags = faTags;

    constructor() { }

    ngOnInit() { }
}