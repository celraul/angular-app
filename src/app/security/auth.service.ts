import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SITE_API } from '../app.consts';
import { map } from 'rxjs/operators';
import { StorageService } from '../services/storage.service';
import { UserStorageModel } from '../shared/models/user-storage.model';

// {    providedIn: 'root'}
@Injectable()
export class AuthService {

    constructor() {
        console.log("AuthService");
    }
    // private currentUserStorageSubject: BehaviorSubject<UserStorageModel>;
    // public currentUser: Observable<UserStorageModel>;

    // constructor(private http: HttpClient, private storageService: StorageService) {
    //     this.currentUserStorageSubject = new BehaviorSubject<UserStorageModel>(this.storageService.getStorage());
    //     this.currentUser = new Observable(ob => {
    //         ob.next();
    //     });
    // }

    // public get currentUserValue(): UserStorageModel {
    //     return this.currentUserStorageSubject.value;
    // }

    // login(username: string, password: string) {
    //     return this.http.post<any>(`${SITE_API}/auth/login`, {
    //         username: username,
    //         password: password
    //     }).pipe(map(res => {
    //         this.storageService.setStorage(res);
    //         return res;
    //     }));
    // }

    // logout() {
    //     this.storageService.removeStorage();
    //     // this.currentUserStorageSubject.next(null);
    // }
}