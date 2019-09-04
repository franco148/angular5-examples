import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'auth', component: AuthComponent} //MOVED TO AUTHMODULE
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'} // This is for lazy loading
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

} 