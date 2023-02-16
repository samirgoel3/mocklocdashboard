import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
type LoginScreenNavigationProps = NativeStackNavigationProp<AuthStackParamList,"LoginScreen">

const LoginScreenController = ():LoginScreenViewProps => {

    const navigation = useNavigation<LoginScreenNavigationProps>();

    const navigateToWeViewScreen = () =>{
        navigation.navigate('LoginScreen')
    }


    return {
        test:'This is Login Srceen view needs to be set here accordingly'
    }
}


export default LoginScreenController ;