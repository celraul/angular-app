import { UserStorageModel } from './../model/user-storage.model';
import { Injectable } from '@angular/core';
import { USER_LOCALSTORAGE } from 'src/app/app.consts';

@Injectable()
export class StorageService {

    constructor() { }

    getStorage(): UserStorageModel {
        return JSON.parse(localStorage.getItem(USER_LOCALSTORAGE));
    }

    setStorage(storage: UserStorageModel) {
        localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(storage));
    }

    removeStorage() {
        localStorage.removeItem(USER_LOCALSTORAGE);
    }

}