import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/model/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  // use async pipe
  orders: Observable<OrderModel[]>

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.initComponents();
  }

  initComponents() {
    this.orders = this.orderService.getOrders();
  }

}
