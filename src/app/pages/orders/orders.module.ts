import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders.routing.module';
import { OrderService } from 'src/app/services/order.service';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers: [OrderService]
})
export class OrdersModule { }
