import { Action, createReducer, on } from "@ngrx/store";
import { ExampleActions } from "./example.actions";


// declaration of our State
export interface State {
  count: number;
  message?: string;
}

const initialState: State = {
  count: 0,
};

// Store — it's only one source of truth. That changed on Actions and Always have actual Data!
// State — only for reading

/**
 *  configuration our Reducer
 *  createReducer — helper-function
 *  on — function for subscribing
 *  ( when Action emits → please set the State object (initialState) specific)
 *  Reducer — function that describes 'How state should be change' (after Action need change State)
 */
const exampleReducer = createReducer(
  initialState,
  on(ExampleActions.increaseCount, state => ({
    ...state,
    count: state.count + 1,
  })),
  on(ExampleActions.sendMassage, (state, {message}) => ({
    ...state,
    message: message
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return exampleReducer(state, action);
}

