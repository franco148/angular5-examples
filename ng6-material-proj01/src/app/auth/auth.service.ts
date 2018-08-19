import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authChange = new Subject<boolean>();
  private user: User;

  // Before using this sevice in other places and use the same instance of it, we need to provide it
  // For that, we need to add as provider in our app.module.ts file
  // providers: [AuthService]
  constructor() { }

  registerUser(authData: AuthData) {
    // For now we are not calling a sevice. So information will be dummy information.
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authChange.next(true);
  }

  login(authData: AuthData) {
    // For now we are not calling a sevice. So information will be dummy information.
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
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
}
