import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LoginService} from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class IterceptorService implements HttpInterceptor{

  constructor(private login:LoginService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.login.logOut();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
  }
}
