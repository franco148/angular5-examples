import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { AuthService, AuthResponseData } from './auth.service';
import { AlertComponent } from 'app/shared/alert/alert.component';
import { PlaceholderDirective } from 'app/shared/placeholder/placeholder.directive';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    // When using Angular8, this should be @ViewChild(PlaceholderDirective, {static: false})
    @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
    private closeSubscription: Subscription;

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

    // All this feature will require entryComponents in app.module file
    private showErrorAlert(errorMessage: string) {
      // const alertComponent = new AlertComponent(); //We can not do this, even if this compiles.
      const alertCmpFactory = this.factory.resolveComponentFactory(AlertComponent);
      const hostViewContainerRef = this.alertHost.vContainerRef;
      hostViewContainerRef.clear();

      const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
      componentRef.instance.message = errorMessage;
      this.closeSubscription = componentRef.instance.close.subscribe(() => {
        this.closeSubscription.unsubscribe();
        hostViewContainerRef.clear();
      });
    }

    ngOnDestroy() {
      if (this.closeSubscription) {
        this.closeSubscription.unsubscribe();
      }
    }
}
