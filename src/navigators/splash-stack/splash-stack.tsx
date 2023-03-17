import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SplashScreen from '../../screens/splash-screen'
import AuthStack from '../auth-stack'
import HomeStack from '../home-stack'

const SplashStack = ()=>{
    const SplashStacker = createNativeStackNavigator<SplashStackParams>()
    return (
        <SplashStacker.Navigator initialRouteName='SplashScreen'>
            <SplashStacker.Screen name='AuthStack' component={AuthStack} options={{headerShown:false}}/>
            <SplashStacker.Screen name='HomeStackScreen' component={HomeStack} options={{headerShown:false}}/>
            <SplashStacker.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/>
        </SplashStacker.Navigator>
    )
}

export default SplashStack;