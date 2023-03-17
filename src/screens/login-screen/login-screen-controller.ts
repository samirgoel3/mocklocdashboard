import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { getDispatcherIncrementCounter } from "../../store/slices/login-screen-slice/login-screen-dispatchers";
import { getCountSelector } from "../../store/slices/login-screen-slice/login-screen-selectors";
import { AppDispatch } from "../../store/store";
import { AsyncStorageKeys } from "../../util/constants/async-storage-keys";
import SessionDetails from '../../util/session/session-details';
type LoginScreenNavigationProps = NativeStackNavigationProp<AuthStackParamList,"LoginScreen">
type SplashScreenNavigationProps = NativeStackNavigationProp<SplashStackParams,'AuthStack'>



const LoginScreenController = ():LoginScreenViewProps => {

    const testCountValue = useAppSelector(getCountSelector)

    const navigation = useNavigation<LoginScreenNavigationProps>();
    const authnavigation = useNavigation<SplashScreenNavigationProps>();
    const newDispatch = useDispatch<AppDispatch>()

    const navigateToWeViewScreen = () =>{
        navigation.navigate('WebViewScreen',{userId:'some user ID'})
    }

    const testDispatcherForCount = () =>{
        newDispatch(getDispatcherIncrementCounter(56))
    }

    const saveuserDetails = ()=>{
        SessionDetails.save(AsyncStorageKeys.UserDetails, "44")
        // newDispatch(getDispatcherForLoggedIn(true))
        authnavigation.replace('HomeStackScreen')
    }

    


    return {
        appHeading: "Mockloc Dashboard",
        onAboutAuthorClick:navigateToWeViewScreen,
        onLoginClick:saveuserDetails
    }
}


export default LoginScreenController ;