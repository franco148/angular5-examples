
// export interface State {
//     isLoading: boolean;
// }

// export enum LoadingStates {
//   START = 'START_LOADING',
//   STOP = 'STOP_LOADING'
// }

// const initialState: State = {
//     isLoading: false
// };

// export function appReducer(state = initialState, action) {
//     // Actions must have an action property
//     switch (action.type) {
//         case LoadingStates.START:
//             return {
//                 isLoading: true
//             };
//         case LoadingStates.STOP:
//             return {
//                 isLoading: false
//             };
//         default:
//             return state;
//     }
// }

// Now here, we are going to have the definition of many reducers.

import * as fromUi from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducer';

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { from } from 'rxjs';

export interface State {
  ui: fromUi.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer
};

// Creating feature selectors
export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuth);
