import { TypedUseSelectorHook, useDispatch, useSelector, } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { ThunkAction, Action } from "@reduxjs/toolkit";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
