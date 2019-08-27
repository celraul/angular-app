import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders.routing.module';
import { OrderService } from 'src/app/services/order.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    OrdersRoutingModule,
    SharedModule
  ],
  providers: [
    OrderService
  ]
})
export class OrdersModule { }
