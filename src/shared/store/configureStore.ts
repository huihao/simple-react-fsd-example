import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './reducers';
import { baseApi as api } from '@shared/api/index';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware, api.middleware];

  const enhancers = [
    createInjectorsEnhancer({
      // @ts-ignore
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];

  const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(middlewares);
    },
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== 'production' || process.env.PUBLIC_URL.length > 0,
    enhancers: (getDefaultEnhancers) => {
      return getDefaultEnhancers({
        autoBatch: { type: 'tick' },
      }).concat(enhancers);
    },
  });

  return store;
}
