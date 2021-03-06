import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe - First', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  //   new Recipe('A Test Recipe - Second', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  // ];
  recipes: Recipe[];
  subscription: Subscription;

  // constructor(private recipeService: RecipeService,
  //             private router: Router,
  //             private route: ActivatedRoute) {
  // } 

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    // this.subscription = this.recipeService
    //                         .recipesChanged
    //                         .subscribe((recipes: Recipe[]) => {
    //                           this.recipes = recipes;
    //                         })    
    // this.recipes = this.recipeService.getRecipes();

    this.subscription = this.store
      .select('recipes')
      .pipe(map(recipesState => recipesState.recipes))
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      }); 
  }

  // onRecipeSelected(recipe: Recipe) {
  //   // this.recipeWasSelected.emit(recipe);    
  // }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  } 

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
