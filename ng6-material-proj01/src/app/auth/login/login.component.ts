import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  // isLoading = false;
  isLoading$: Observable<boolean>;
  // private loadingSubs: Subscription;

  constructor(private authService: AuthService,
              private uiService: UIService,
              private store: Store<{ui: fromRoot.State}>) { }

  ngOnInit() {
    // this.isLoading$ = this.store.pipe(map(state => {
    //   return state.ui.isLoading;
    // }));
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    // this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
    //   this.isLoading = isLoading;
    // });
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required, Validators.min(6)]})
    });
  }

  onSubmit() {
    // console.log(this.loginForm);
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

  ngOnDestroy() {
    // if (this.loadingSubs) {
    //   this.loadingSubs.unsubscribe();
    // }
  }
}
