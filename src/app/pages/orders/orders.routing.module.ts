import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from './orders.component';

const routes: Routes = [
    {
        path: '',
        component: OrdersComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
    declarations: []
})
export class OrdersRoutingModule { }