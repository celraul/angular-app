import { OnInit, Component } from '@angular/core';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    constructor(private toasterService: ToasterService) { }

    ngOnInit() {
        //this.toasterService.onSuccess("Deu bom", "olá");

        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }
}