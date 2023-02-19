import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";


const testValueInputSelectorItems = (state:RootState) => state.loginReducers.value
export const getCountSelector = createDraftSafeSelector([testValueInputSelectorItems], (items)=>{return items + 2 ;})