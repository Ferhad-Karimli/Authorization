import { configureStore } from '@reduxjs/toolkit';
import AuthorizationSlice from './slices/index';

export const store = configureStore({
  reducer: {
   auth:AuthorizationSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;