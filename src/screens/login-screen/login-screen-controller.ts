import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AsyncStorageKeys } from "../../util/constants/async-storage-keys";
import SessionDetails from '../../util/session/session-details';
type LoginScreenNavigationProps = NativeStackNavigationProp<AuthStackParamList,"LoginScreen">



const LoginScreenController = ():LoginScreenViewProps => {

    const navigation = useNavigation<LoginScreenNavigationProps>();

    const navigateToWeViewScreen = () =>{
        navigation.navigate('LoginScreen')
    }

    const saveuserDetails = ()=>{
        SessionDetails.save(AsyncStorageKeys.UserDetails, "some user iD")
    }

    return {
        test:'This is Login Srceen view needs to be set here accordingly',
        testFunction:saveuserDetails
    }
}


export default LoginScreenController ;