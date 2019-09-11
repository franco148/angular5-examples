// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { map, tap, take, exhaustMap } from 'rxjs/operators';

// import { Recipe } from '../recipes/recipe.model';
// import { RecipeService } from '../recipes/recipe.service';
// import { AuthService } from 'app/auth/auth.service';

// @Injectable({ providedIn: 'root' })
// export class DataStorageService {

//   constructor(private http: HttpClient, 
//               private recipeService: RecipeService,
//               private authService: AuthService) {}

//   storeRecipes() {
//     const recipes = this.recipeService.getRecipes();
//     this.http
//       .put(
//         'https://ngheroesfirebase.firebaseio.com/recipes.json',
//         recipes
//       )
//       .subscribe(response => {
//         console.log(response);
//       });
//   }

//   fetchRecipes() {
//     // This will do the operation only once, then it will automatically unsubscribe.
//     // On the other hand we would need to move the http get call inside the subscription
//     // however, it will not work, because we need to return an observable.
//     // The solucion will be to use exhaustMap operator, it waits for the first observable
//     // for the user observable to complete which will happen after we took the latest user.
//     // MOVED TO AN INTERCEPTOR
//     // return this.authService.user.pipe(
//     //   take(1),
//     //   exhaustMap(user => {
//     //     return this.http.get<Recipe[]>(
//     //       // 'https://ngheroesfirebase.firebaseio.com/recipes.json?auth='+token //We can add it manually. Or as follows.
//     //       'https://ngheroesfirebase.firebaseio.com/recipes.json?',
//     //       {
//     //         params: new HttpParams().set('auth', user.token)
//     //       }
//     //     );
//     //   }),
//     //   map(recipes => {
//     //     if (recipes) {
//     //       return recipes.map(recipe => {
//     //         return {
//     //           ...recipe,
//     //           ingredients: recipe.ingredients ? recipe.ingredients : []
//     //         };
//     //       });
//     //     }

//     //     return [];
//     //   }),
//     //   tap(recipes => {
//     //     this.recipeService.setRecipes(recipes);
//     //   })
//     // );

//     return this.http.get<Recipe[]>(
//           'https://ngheroesfirebase.firebaseio.com/recipes.json?'
//         ).pipe(
//           map(recipes => {
//             if (recipes) {
//               return recipes.map(recipe => {
//                 return {
//                   ...recipe,
//                   ingredients: recipe.ingredients ? recipe.ingredients : []
//                 };
//               });
//             }
    
//             return [];
//           }),
//           tap(recipes => {
//             this.recipeService.setRecipes(recipes);
//           })
//         );
//   }
// }