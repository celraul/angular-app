import { CanLoad, CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private router: Router, private authenticationService: AuthService) { }

  canLoad(): Observable<boolean> {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      return of(true);
    }

    this.router.navigate(['/login']);
    return of(false);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        this.router.navigate(['/']);
        return of(false);
      }

      return of(true);
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return of(false);
  }
}