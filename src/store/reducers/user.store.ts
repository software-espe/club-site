import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@firebase/auth';

type userState = {
  user?: User;
  loggedIn: boolean;
};

const initialState: userState = {
  user: undefined,
  loggedIn: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.user = undefined;
      state.loggedIn = false;
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
