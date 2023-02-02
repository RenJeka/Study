import {State} from "./example.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

/**
 * Generally State — it is very large object
 * to chose specific fields (properties) from State — use these selectors
 */
export namespace ExampleSelectors {

  export const state = createFeatureSelector<State>("example");

  // Chose only "count"
  export const count = createSelector(state, (state) => state.count);

  // Chose only "message"
  export const message = createSelector(state, state => state.message);

  export const messageAndCount = createSelector(state, state => (state.message || '') + state.count);

  export const data = createSelector(state, state => state.data)

}
