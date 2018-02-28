import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const APP_ROUTES: Routes = [
  // With the following configuration the path is going to be: localhost:4200/home
  // If we do not need to specify /home, we will need to use the following.
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  //{ path: '', component: HomeComponent, outlet: 'home' },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:term', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
// If we want to use # as older approach: localhost:4200/#/home
