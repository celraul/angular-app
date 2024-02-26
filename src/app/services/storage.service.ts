import { USER_LOCALSTORAGE } from '../app.consts';
import { Injectable } from '@angular/core';
import { UserStorageModel } from '../shared/models/user-storage.model';

@Injectable()
export class StorageService {

    constructor() { }

    getStorage(): UserStorageModel {
      return JSON.parse(localStorage.getItem(USER_LOCALSTORAGE) ?? "");
    }

    setStorage(storage: UserStorageModel) {
        localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(storage));
    }

    removeStorage() {
        localStorage.removeItem(USER_LOCALSTORAGE);
    }
}