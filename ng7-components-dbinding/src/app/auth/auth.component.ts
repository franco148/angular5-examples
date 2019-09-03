import { Component, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService, AuthResponseData } from './auth.service';
import { AlertComponent } from 'app/shared/alert/alert.component';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService,
                private router: Router,
                private factory: ComponentFactoryResolver) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
          return;
        }
        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;
        if (this.isLoginMode) {
          authObs = this.authService.login(email, password);
        } else {
          authObs = this.authService.signup(email, password);
        }

        authObs.subscribe(response => {
          console.log(response);
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        }, errorMesssage => {
          console.log(errorMesssage);
          this.error = errorMesssage;
          this.showErrorAlert(errorMesssage);
          this.isLoading = false;
        });

        form.reset();
    }

    onHandleError() {
      this.error = null;
    }

    private showErrorAlert(errorMessage: string) {
      // const alertComponent = new AlertComponent(); //We can not do this, even if this compiles.
      const alertCmpFactory = this.factory.resolveComponentFactory(AlertComponent);
      
    }
}
