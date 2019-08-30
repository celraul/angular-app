import { Injectable } from '@angular/core';
import { SITE_API } from '../app.consts';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovimentoModel } from '../model/movimento.model';

@Injectable()
export class MovimentoService {

    constructor(private http: HttpClient) { }

    getMovimentos(skip: number = 1, take: number = 10, orderBy: string = ""): Observable<MovimentoModel[]> {
        return this.http.get<MovimentoModel[]>(`${SITE_API}/movimento?skip=${skip}&take=${take}&take=${orderBy}`).pipe(map(response => response));
    }

    //https://www.mocky.io/
    getMovimentosMock(skip: number = 1, take: number = 10, orderBy: string = ""): Observable<MovimentoModel[]> {
        return this.http.get<MovimentoModel[]>(`http://www.mocky.io/v2/5d6584f9340000499bf44815`).pipe(map(response => response));
    }
}