import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authSvr:AuthService) {

  }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {

    console.log(next);

    if (this.authSvr.isAuthenticated()) {
      console.log("Guard has passed");
      return true;
    }else{
      console.log("Blocked by Guard");
      return false;
    }
  }
}
