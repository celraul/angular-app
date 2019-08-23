import { OnInit, Component } from '@angular/core';
import { ToasterService } from 'src/app/shared/serivices/toaster.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
    
    constructor(private toasterService : ToasterService) { }

    ngOnInit() { 
        this.toasterService.onSuccess("Deu bom", "olá");

    }
}