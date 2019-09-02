import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DataStorageService } from 'app/shared/data-storage.service';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSubscription: Subscription;

  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
