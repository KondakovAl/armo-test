import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './usersSlice';

const rootReducer = combineReducers({
  [usersSlice.reducerPath]: usersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([usersSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
