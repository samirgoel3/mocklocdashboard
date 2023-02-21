import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import HomeStack from "../home-stack"

interface AllScreenParamsList extends HomeStackParams, SplashStackParams, BottomStackParams, AuthStackParamList {}
type AllScreenNavigationProps = NativeStackNavigationProp<AllScreenParamsList>