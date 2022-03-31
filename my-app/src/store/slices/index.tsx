import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface DrawerState {
  status: boolean;
}

const initialState: DrawerState = {
  status: false,
} as DrawerState;

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    drawer: (state) => {
      !state.status ? (state.status = true) : (state.status = false);
    },
  },
});

export const { drawer } = drawerSlice.actions;
export const selectCount = (state: RootState) => state.drawer.status;
export default drawerSlice.reducer;
