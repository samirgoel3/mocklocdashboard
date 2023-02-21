import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginScreenSlice from "./slices/login-screen-slice/login-screen-slice";
import splashScreenSlice from "./slices/splash-screen-slice/splash-screen-slice";
import stationaryPointSlice from "./slices/stationary-point-slice";


const RootReducer = combineReducers({
  loginReducers: loginScreenSlice,
  stationaryPointReduces: stationaryPointSlice,
  splashReducers:splashScreenSlice
})




export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => {
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      return getDefaultMiddleware().concat(createDebugger());
    }
    return getDefaultMiddleware();
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof RootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
