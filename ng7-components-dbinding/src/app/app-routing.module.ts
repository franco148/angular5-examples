import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'auth', component: AuthComponent} //MOVED TO AUTHMODULE
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, // This is for lazy loading
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

} 