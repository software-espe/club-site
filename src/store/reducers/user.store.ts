import { clubUser } from '../../interface/user.interface';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type userState = {
  user?: clubUser;
  loggedIn: boolean;
  loading: boolean;
  triedToLogin: boolean;
};

const initialState: userState = {
  user: undefined,
  loggedIn: false,
  loading: false,
  triedToLogin: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<clubUser>) => {
      if (action.payload) {
        state.user = action.payload;
        state.loggedIn = true;
      }
    },
    logout: (state) => {
      state.user = undefined;
      state.loggedIn = false;
      state.loading = false;
      state.triedToLogin = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setTriedToLogin: (state, action: PayloadAction<boolean>) => {
      state.triedToLogin = action.payload;
    }
  }
});

export const { login, logout, setLoading, setTriedToLogin } = userSlice.actions;
export default userSlice.reducer;
