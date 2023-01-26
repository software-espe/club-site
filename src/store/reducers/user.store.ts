import { clubUser } from '../../interface/user.interface';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type userState = {
  user?: clubUser;
  loggedIn: boolean;
};

const initialState: userState = {
  user: undefined,
  loggedIn: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<clubUser>) => {
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
