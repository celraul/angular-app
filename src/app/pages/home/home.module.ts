import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.modules';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent,
        DashboardComponent
    ],
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
    providers: []
})
export class HomeModule { }