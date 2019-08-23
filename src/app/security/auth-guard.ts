import { CanLoad, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

  constructor() {  }

  checkAuthentication(): Observable<boolean> {
    return of(true);
  }

  canLoad(): Observable<boolean> {
    return this.checkAuthentication();
  }

  canActivate(): Observable<boolean> {
    return this.checkAuthentication();
  }
}