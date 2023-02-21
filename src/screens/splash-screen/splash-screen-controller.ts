import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { getDispatcherForLoggedIn, getDispatcherForSplashLoadingIn } from '../../store/slices/splash-screen-slice/splash-scree-dispatchers';
import { getIsSplashLoading, getIsUserLoggedIn } from '../../store/slices/splash-screen-slice/splash-scree-selectors';
import { AppDispatch } from '../../store/store';
import { AsyncStorageKeys } from '../../util/constants/async-storage-keys';
import { useNavigation } from "@react-navigation/native";

type SplashScreenNavigationProps = NativeStackNavigationProp<SplashStackParams,"SplashScreen">


const useSplashScreenController = (): SplashScreenViewParam => {

    const isuserLoggedIn = useAppSelector(getIsUserLoggedIn)
    const isSplashLoading = useAppSelector(getIsSplashLoading)
    const dispatch = useDispatch<AppDispatch>()
    const navigation = useNavigation<SplashScreenNavigationProps>();



    // if (isSplashLoading == false) { 
    //     isuserLoggedIn?
    //      navigation.replace('HomeStackScreen') : navigation.replace('AuthStack')
    // }



    const setStateAcordingToLoginStatus = async () => {
        const val = await AsyncStorage.getItem(AsyncStorageKeys.UserDetails)
        if(val != '44'){
            // dispatch(getDispatcherForLoggedIn(false))
            navigation.replace('AuthStack')
        }
        else{
            // dispatch(getDispatcherForLoggedIn(true))
            navigation.replace('HomeStackScreen')
        }
        // dispatch(getDispatcherForSplashLoadingIn(false))
    }

    setTimeout(() => {
        setStateAcordingToLoginStatus();
    }, 3000)



    return {
        splashValue: "Mockloc Dashboard"
    }

}

export default useSplashScreenController;