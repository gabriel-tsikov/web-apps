import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse,
} from '@angular/common/http';
import {Observable, of} from 'rxjs';

import {catchError, tap} from 'rxjs/internal/operators';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthenticationService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const accessToken = this.authService.getToken();
        if (accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        }
        return next.handle(request).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    console.log('Response success', evt);
                }
            }),
            catchError(err => {
                console.error('Catched http error: ', err);
                return of(err);
            })
        );
    }
}
