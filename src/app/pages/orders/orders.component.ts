import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Observable, Subscription } from 'rxjs';
import { OrderModel } from 'src/app/model/order.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  private ordersSubscription: Subscription;

  // use async pipe
  orders$: Observable<OrderModel[]>

  //material table
  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<OrderModel>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.initComponents();
  }

  ngOnDestroy() {
    this.ordersSubscription.unsubscribe();
  }

  initComponents() {
    // to use async
    this.orders$ = this.orderService.getOrders();

    this.ordersSubscription = this.orderService.getOrdersMock().subscribe(resp => {
      this.dataSource = new MatTableDataSource(resp);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
