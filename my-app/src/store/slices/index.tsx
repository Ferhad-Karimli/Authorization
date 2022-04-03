import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  auth: any;
}

const initialState: AuthState = {
  auth: "",
};

export const AuthorizationSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.auth = action.payload;
    },
  },
});

export const { login } = AuthorizationSlice.actions;
export default AuthorizationSlice.reducer;
