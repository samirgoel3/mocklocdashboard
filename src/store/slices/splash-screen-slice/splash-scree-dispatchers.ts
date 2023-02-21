import { AppDispatch } from "../../store";
import { loading, loggedIn } from "./splash-screen-slice";
/**
 * 
 * @returns {AppDispatch} for Updating logged in state fo user
 */
export const getDispatcherForLoggedIn = (value: boolean) => (dispatch: AppDispatch) => {
    return dispatch({ type: loggedIn.type, payload: value });
};

export const getDispatcherForSplashLoadingIn = (value: boolean) => (dispatch: AppDispatch) => {
    return dispatch({ type: loading.type, payload: value });
};


