import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';

import { AuthGuardService } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ AuthGuardService ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
