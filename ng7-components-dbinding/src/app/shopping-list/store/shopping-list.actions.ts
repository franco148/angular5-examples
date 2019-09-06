import { Action } from '@ngrx/store';
import { Ingredient } from 'app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;

    // Important: 'PAYLOAD' is not a name you have to use! The action
    // interface only forces you to add a 'type' property!
    payload: Ingredient;
}