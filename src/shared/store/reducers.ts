/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

import { InjectedReducersType } from '@shared/types/injector-typings';
import { baseApi as api } from '@shared/api/index';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return combineReducers({
      [api.reducerPath]: api.reducer,
    });
  } else {
    return combineReducers({
      [api.reducerPath]: api.reducer,
      ...injectedReducers,
    });
  }
}
