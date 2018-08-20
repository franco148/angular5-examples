import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';

// The following decorator allows us to make the service injectable.
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authChange = new Subject<boolean>();
  private user: User;

  // Before using this sevice in other places and use the same instance of it, we need to provide it
  // For that, we need to add as provider in our app.module.ts file
  // providers: [AuthService]
  constructor(private router: Router) { }

  registerUser(authData: AuthData) {
    // For now we are not calling a sevice. So information will be dummy information.
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authSuccessfully();
  }

  login(authData: AuthData) {
    // For now we are not calling a sevice. So information will be dummy information.
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authSuccessfully();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    // But if we return like the following, any change outside it is going to take effect in local information.
    // For avoiding that we need to return a copy of it.
    // return this.user;

    return {...this.user};
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
