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



const LoginScreenController = ():LoginScreenViewProps => {

    const testCountValue = useAppSelector(getCountSelector)

    const navigation = useNavigation<LoginScreenNavigationProps>();
    const newDispatch = useDispatch<AppDispatch>()

    const navigateToWeViewScreen = () =>{
        navigation.navigate('WebViewScreen',{userId:'some user ID'})
    }

    const testDispatcherForCount = () =>{
        console.log("**** testing dispatch")
        newDispatch(getDispatcherIncrementCounter(56))
    }

    const saveuserDetails = ()=>{
        SessionDetails.save(AsyncStorageKeys.UserDetails, "some user iD")
    }

    


    return {
        test: "This is Login Srceen view needs to be set here accordingly " + testCountValue,
        onAboutAuthorClick:testDispatcherForCount,
        testFunction:saveuserDetails
    }
}


export default LoginScreenController ;