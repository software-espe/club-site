import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@firebase/auth';

type userState = {
  user?: User;
  loggedIn: boolean;
  isLoading: boolean;
};

const initialState: userState = {
  user: undefined,
  loggedIn: false,
  isLoading: true
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
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { login, logout, setLoading } = userSlice.actions;
export default userSlice.reducer;
