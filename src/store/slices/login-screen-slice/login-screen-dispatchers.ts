import { AppThunk } from "../../hooks";
import { AppDispatch } from "../../store";
import { incrementByAmount } from "./login-screen-slice";
/**
 * 
 * @returns {AppDispatch} for updating purchased courses in MyCoursesSlice state
 */
export const getDispatcherIncrementCounter = (amount: number) => (dispatch: AppDispatch) => {
    return dispatch({ type: incrementByAmount.type, payload: amount });
};


///////////////// DISPATCHERS ////////////////////
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.



// export const incrementIfOdd = (amount: number): AppThunk =>(dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export const testAsyncDispatcher = (amount:number):AppThunk => (dispatch, getState) =>{
    dispatch(incrementByAmount(amount));
}