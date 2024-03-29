import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { AsyncStorageKeys } from "../../util/constants/async-storage-keys";
import SessionDetails from "../../util/session/session-details";
type SplashScreenNavigationProps = NativeStackNavigationProp<SplashStackParams,'HomeStackScreen'>
type HomeNavigationProps = NativeStackNavigationProp<HomeStackParams,'BottomStack'>

const useSettingsScreenController = ():SettingsScreenViewProps=>{

    const [userDetails, setuserDetails] = useState("");
    const splashNavigation = useNavigation<SplashScreenNavigationProps>()
    const homeNavigation = useNavigation<HomeNavigationProps>()

    const getUserDetails =  async() =>{
        const data  =  JSON.stringify(await SessionDetails.get(AsyncStorageKeys.UserDetails));
        setuserDetails(data);
    }

    const perfromLogout = ()=>{
        SessionDetails.remove(AsyncStorageKeys.UserDetails);
        splashNavigation.replace('AuthStack')
    }

    const handleAppQuerryClick = () =>{
        homeNavigation.navigate('AppQueryScreen')
    }

    const handleYourQuerryClick = () =>{
        homeNavigation.navigate('YourQuerryScreen')
    }

    const handleViewAllUsersClick = () =>{
        homeNavigation.navigate('UsersListScreen')
    }

    getUserDetails();


    return {
        testSettingscreenValue:userDetails,
        userEmail:"samirgoel3@gmail.com",
        userImage:"some user image url ",
        userName:"Samir Goel",
        logout:perfromLogout,
        onAppQuerry:handleAppQuerryClick,
        onViewUser:handleViewAllUsersClick,
        onYourQuerry:handleYourQuerryClick
    }

}


export default useSettingsScreenController;