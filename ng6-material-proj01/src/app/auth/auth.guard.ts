import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Store } from '@ngrx/store';

// import { AuthService } from './auth.service';
import * as fromRoot from '../app.reducer';
import { take } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    // constructor(private authService: AuthService, private router: Router) {}
    constructor(private store: Store<fromRoot.State>, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // if (this.authService.isAuth()) {
        //     return true;
        // }
        // this.router.navigate(['/login']);
        return this.store.select(fromRoot.getIsAuthenticated).pipe(take(1));
    }

    canLoad(route: Route) {
      // if (this.authService.isAuth()) {
      //   return true;
      // }
      // this.router.navigate(['/login']);
      return this.store.select(fromRoot.getIsAuthenticated).pipe(take(1));
    }
}
