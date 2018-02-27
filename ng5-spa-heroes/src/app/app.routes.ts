import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  // With the following configuration the path is going to be: localhost:4200/home
  // If we do not need to specify /home, we will need to use the following.
  //{ path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, outlet: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
// If we want to use # as older approach: localhost:4200/#/home
