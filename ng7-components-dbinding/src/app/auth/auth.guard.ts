import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, 
                router: RouterStateSnapshot): boolean | 
                                              UrlTree | 
                                              Promise<boolean | UrlTree> | 
                                              Observable<boolean | UrlTree> {

        // FIRST APPROACH
        // return this.authService.user.pipe(
        //     map(user => {
        //         return !!user;
        //     }),
        //     tap(isAuth => {
        //         if (!isAuth) {
        //             this.router.navigate(['/auth']);
        //         }
        //     })
        // );

        // SECOND APPROACH
        return this.authService.user.pipe(
            map(user => {
                const isAuth = !!user;
                if (isAuth) {
                    return true;
                }

                return this.router.createUrlTree(['/auth']);
            })
        );
    }
}
