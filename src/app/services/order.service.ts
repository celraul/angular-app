import { Injectable } from '@angular/core';
import { SITE_API } from '../app.consts';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from '../model/order.model';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {

    constructor(private http: HttpClient) { }

    getOrders(skip: number = 1, take: number = 10, orderBy: string = ""): Observable<OrderModel[]> {
        return this.http.get<OrderModel[]>(`${SITE_API}/order?skip=${skip}&take=${take}&take=${orderBy}`).pipe(map(response => response));
    }

    //https://www.mocky.io/
    getOrdersMock(skip: number = 1, take: number = 10, orderBy: string = ""): Observable<OrderModel[]> {
        return this.http.get<OrderModel[]>(`http://www.mocky.io/v2/5d6584f9340000499bf44815`).pipe(map(response => response));
    }
}