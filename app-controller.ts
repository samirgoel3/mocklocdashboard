import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { AsyncStorageKeys } from './src/util/constants/async-storage-keys';

type AppControllerProps = {
    isUserLoggedin: boolean,
    isLoading:boolean,
}


const checkLogin = async () => {
    const val = await AsyncStorage.getItem(AsyncStorageKeys.UserDetails)
    console.log("Users Details in App Controller ------>  " + val)
    if (val === null) { return false }
    else { return true; }
}

const useAppController = (): AppControllerProps => {

    const [loggedIn, setLoggedInState] = useState(false)
    const [isLoading, setLoading ] = useState(true)
   
   

    const updateLogin = () => {
        
        setTimeout(async()=>{
            const val = await checkLogin();
            console.log("****** Logged In State: "+val)
            setLoggedInState(val)
            setLoading(false)
        }, 3000)
        
    }

  

    updateLogin();

    return {
        isUserLoggedin:loggedIn,
        isLoading:isLoading,
    }
}

export default useAppController;