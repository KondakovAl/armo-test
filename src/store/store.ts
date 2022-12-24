import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import popupsSlice from './popupsSlice';
import { usersSlice } from './usersSlice';

const rootReducer = combineReducers({
  popups: popupsSlice,
  filter: filterSlice,
  [usersSlice.reducerPath]: usersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([usersSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
