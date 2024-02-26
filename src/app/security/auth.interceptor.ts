import { AuthService } from './auth.service';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// {    providedIn: 'root'}
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const currentUser = this.authService.currentUserValue;
        // const isLoggedIn = currentUser && currentUser.token;
        // let externalRequest = request.params.get("external") != undefined;
        // //&& request.params.get("external").indexOf("true") != -1;

        // if (externalRequest) {
        //     return next.handle(request);
        // }

        // //const isApiUrl = request.url.startsWith(SITE_API);
        // if (isLoggedIn) {
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Bearer ${currentUser.token}`
        //         }
        //     });
        // }

        return next.handle(request);
    }
}