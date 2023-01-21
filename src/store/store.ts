import { configureStore } from '@reduxjs/toolkit';
import User from './reducers/user.store';

export const store = configureStore({
  reducer: {
    userSession: User
  }
});

export type State = ReturnType<typeof store.getState>;
