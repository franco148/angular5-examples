import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';

import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  // user = new Subject<User>();
  
  // The difference is that behavior subject also gives subscribers immediate access to the previously
  // emitted value even if they have not subscribed at the point of time that value was emitted.
  // That means we can get access to be currently active user even if we only subscribe after that
  // user has been emitted. So this means when we fetch data and we need that token at this point of time,
  // even if the user logged in before that point of time which will have been the case, we get access
  // to that latest user.
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  signup(usrEmail: string, usrPassword: string) {
    // [API_KEY]
    return this.http
        .post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]',
          {
            email: usrEmail,
            password: usrPassword,
            returnSecureToken: true
          }
        )
        .pipe(
          catchError(this.handleError), 
          tap(responseData => {
            this.handleAuthentication(
              responseData.email,
              responseData.localId,
              responseData.idToken,
              +responseData.expiresIn
            )
          })
        );
  }

  login(usrEmail: string, usrPassword: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]',
      {
        email: usrEmail,
        password: usrPassword,
        returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap(responseData => {
        this.handleAuthentication(
          responseData.email,
          responseData.localId,
          responseData.idToken,
          +responseData.expiresIn
        )
      })
    );
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000
    );

    const user = new User(
      email, 
      userId, 
      token, 
      expirationDate
    );

    this.user.next(user);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMsg = 'An unknown error occurred';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMsg);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'This password is not correct';
        break;
    }
    return throwError(errorMsg);
  }
}
