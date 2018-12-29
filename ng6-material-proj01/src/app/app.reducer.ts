
export interface State {
    isLoading: boolean;
}

export enum LoadingStates {
  START = 'START_LOADING',
  STOP = 'STOP_LOADING'
}

const initialState: State = {
    isLoading: false
};

export function appReducer(state = initialState, action) {
    // Actions must have an action property
    switch (action.type) {
        case LoadingStates.START:
            return {
                isLoading: true
            };
        case LoadingStates.STOP:
            return {
                isLoading: false
            };
        default:
            return state;
    }
}
