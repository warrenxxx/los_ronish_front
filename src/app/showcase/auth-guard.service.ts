import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem(environment.currentUser) && JSON.parse(localStorage.getItem(environment.currentUser))["roles"][state.url]==true) {
                return true;
        }

        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
  }
}
