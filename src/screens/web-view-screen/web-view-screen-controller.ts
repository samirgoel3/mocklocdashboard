import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
type WebViewScreenNavigationProps = NativeStackNavigationProp<AuthStackParamList,"WebViewScreen">

const useWebViewScreenViewController = ():WebViewScreenViewProps =>{

    const navigation = useNavigation<WebViewScreenNavigationProps>()

    const navigateToLoginScreen = ()=>{
        navigation.navigate('LoginScreen')
    }

    return {
        testWebViewScreenValue:'Web View'
    }
}

export default useWebViewScreenViewController ; 