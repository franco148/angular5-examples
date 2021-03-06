import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from './material.module';
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/current-training/stop-training.component';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';
import { UIService } from './shared/ui.service';
// import { appReducer } from './app.reducer';
import { reducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    // FormsModule,
    // ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    // AngularFireStorageModule // imports firebase/storage only needed for storage features
    AuthModule,
    // TrainingModule  // This is removed for having Lazy Loading module.
    AngularFirestoreModule, // Reading for fixing a dependency issue for implementing LazyLoading feature.
    // StoreModule.forRoot({ui: appReducer})
    StoreModule.forRoot(reducers)
  ],
  providers: [AuthService, UIService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
