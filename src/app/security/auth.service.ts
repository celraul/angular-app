import { StorageService } from './../shared/services/storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserStorageModel } from '../shared/model/user-storage.model';
import { HttpClient } from '@angular/common/http';
import { SITE_API } from '../app.consts';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    private currentUserStorageSubject: BehaviorSubject<UserStorageModel>;
    public currentUser: Observable<UserStorageModel>;

    constructor(private http: HttpClient, private storageService: StorageService) {
        this.currentUserStorageSubject = new BehaviorSubject<UserStorageModel>(this.storageService.getStorage());
    }

    public get currentUserValue(): UserStorageModel {
        return this.currentUserStorageSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${SITE_API}/auth/login`, {
            username: username,
            password: password
        }).pipe(map(res => {
            this.storageService.setStorage(res);
            return res;
        }));
    }

    emailInUse(email: string) {
        debugger;
        return this.http.post<any>(`${SITE_API}/auth/email-in-use`, {
            email: email
        }).pipe(map(res => {
            this.storageService.setStorage(res);
            return res;
        }));
    }

    logout() {
        this.storageService.removeStorage();
        this.currentUserStorageSubject.next(null);
    }
}