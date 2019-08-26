import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.modules';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        HomeComponent,
        DashboardComponent
    ],
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
    providers: [ToasterService]
})
export class HomeModule { }