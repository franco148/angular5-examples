import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription, Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from 'app/logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];

  // ingredients: Ingredient[]; 
  ingredients: Observable<{ ingredients: Ingredient[]}>;
  private ingredientsChangeSub: Subscription;

  constructor(private slService: ShoppingListService,
              private loggingService: LoggingService,
              private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    
    // this.ingredients = this.slService.getIngredients();
    // this.ingredientsChangeSub = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   ); 
    
    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit');
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    if (this.ingredientsChangeSub) {
      this.ingredientsChangeSub.unsubscribe();
    }
  }

} 