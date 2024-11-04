import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { newsData, userData } from './reducers';

const rootReducer = combineReducers({
  newsData,
  userData,
});

export type RootState = ReturnType<typeof rootReducer>;


const store = configureStore({
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
    }),
  reducer: rootReducer,
});


export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;

export * from './reducers';
export * from './observers';
