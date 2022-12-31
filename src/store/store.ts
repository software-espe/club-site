import { configureStore } from '@reduxjs/toolkit';
import User from './reducers/user.store';

export const store = configureStore({
  reducer: {
    user: User
  }
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
