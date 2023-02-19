import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginScreenSlice from "./slices/login-screen-slice/login-screen-slice";
import stationaryPointSlice from "./slices/stationary-point-slice";

const RootReducer = combineReducers({
  loginReducers: loginScreenSlice,
  stationaryPointReduces: stationaryPointSlice
})

export const store = configureStore({
  reducer: RootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof RootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch