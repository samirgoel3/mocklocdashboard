import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { AsyncStorageKeys } from './src/util/constants/async-storage-keys';

type AppControllerProps = {
    isUserLoggedin: boolean
}


const checkLogin = async () => {
    const val = await AsyncStorage.getItem(AsyncStorageKeys.UserDetails)
    console.log("Users Details in App Controller ------>  " + val)
    if (val === null) { return false }
    else { return true; }
}

const useAppController = (): AppControllerProps => {

    const [loggedIn, setLoggedInState] = useState(false)

    const checkIsUserLoggedin = async () => {
        const val = await checkLogin();
        setLoggedInState(val)
    }

    checkIsUserLoggedin();

    return {
        isUserLoggedin:loggedIn
    }
}

export default useAppController;