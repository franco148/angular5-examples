import { Action } from '@ngrx/store';

import { Ingredient } from 'app/shared/ingredient.model';

// We can define the initial state. It should be a JS Object
const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
};

// Implementing the reducer that ngrx pattern indicates
export function shoppingListReducer(state = initialState, action: Action) {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            // The following operation would be totally wrong because state changes with NgRx
            // always have to be immutable, which means you must not edit the existing or the previous state
            // IN SUMMARY, NEVER TOUCH THE EXISTING STATE
            // state.ingredients.push()

            return {
                ...state,
                ingredients: [...state.ingredients, action]
            };
    }
}