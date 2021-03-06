import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
// import { RecipesModule } from './recipes/recipes.module';
// import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';
// import { AuthModule } from './auth/auth.module';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { RecipeEffects } from './recipes/store/recipe.effects';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // AuthComponent, //MOVED TO AUTHMODULE

    // ype DropdownDirective is part of the declarations of 2 modules:
    // Previous error message is because these do not need to be declared, because
    // they are already declared in SharedModule
    // DropdownDirective,
    // LoadingSpinnerComponent,
    // AlertComponent,
    // PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // StoreModule.forRoot({
    //   shoppingList: shoppingListReducer
    // }),
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, RecipeEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    // RecipesModule, //For lazy loading, we do not need it eagerly
    // ShoppingListModule, //For lazy loading, we do not need it eagerly
    // AuthModule, //For lazy loading, we do not need it eagerly
    SharedModule,
    CoreModule
  ],
  //providers: [
    // ShoppingListService, 
    // RecipeService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // }

    // MOVED TO CORE MODULE
  //],
  bootstrap: [AppComponent],
  // entryComponents: [
  //   AlertComponent
  // ] // Moved to SharedModule
  
  // providers: [LoggingService]
})
export class AppModule { }
