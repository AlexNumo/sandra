import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './app/auth';

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
});
