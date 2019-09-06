import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/Ingredient.model';
import * as slActions from './shopping-list.actions';

// We can define the initial state. It should be a JS Object
const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
};

// Implementing the reducer that ngrx pattern indicates
export function shoppingListReducer(state = initialState, action: slActions.AddIngredient) {
    switch (action.type) {
        case slActions.ADD_INGREDIENT:
            // The following operation would be totally wrong because state changes with NgRx
            // always have to be immutable, which means you must not edit the existing or the previous state
            // IN SUMMARY, NEVER TOUCH THE EXISTING STATE
            // state.ingredients.push()

            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
    }
}