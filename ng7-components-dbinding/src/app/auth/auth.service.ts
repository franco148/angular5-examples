import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
  kind: string;
  ideToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

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
        .pipe(catchError(errorResponse => {
          let errorMsg = 'An unknown error occurred';
          if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMsg);
          }
          switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMsg = 'This email exists already';
          }
          return throwError(errorMsg);
        }));
  }
}
