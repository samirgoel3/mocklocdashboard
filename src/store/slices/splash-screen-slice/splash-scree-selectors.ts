import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";


const splashValueInputSelectorItems = (state:RootState) => state.splashReducers
export const getIsUserLoggedIn = createDraftSafeSelector([splashValueInputSelectorItems], (items)=>{return items.loggedIn})
export const getIsSplashLoading = createDraftSafeSelector([splashValueInputSelectorItems], (items)=>{return items.loading})