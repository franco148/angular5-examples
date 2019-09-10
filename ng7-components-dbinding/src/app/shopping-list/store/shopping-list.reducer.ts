import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/Ingredient.model';
import * as slActions from './shopping-list.actions';


export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

export interface AppState {
    shoppingList: State;
}

// We can define the initial state. It should be a JS Object
const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ],
      editedIngredient: null,
      editedIngredientIndex: -1
};

// Implementing the reducer that ngrx pattern indicates
export function shoppingListReducer(state: State = initialState, action: slActions.ShoppingListActions) {
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
        case slActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case slActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];
            const updatedIngredient = {
                ... ingredient,
                ...action.payload.ingredient
            };
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[action.payload.index] = updatedIngredient;

            return {
                ...state,
                ingredients: updatedIngredients
            };
        case slActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== action.payload;
                })
            };
        case slActions.START_EDIT:
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: { ...state.ingredients[action.payload] }
            };
        case slActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        default:
            return state;
    }
}