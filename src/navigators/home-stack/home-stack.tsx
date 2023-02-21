import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppQueryScreen from '../../screens/app-query-screen'
import UsersListScreen from '../../screens/user-list-screen'
import BottomStack from '../bottom-stack'

const HomeStack = ()=>{
    const HomeStacker = createNativeStackNavigator<HomeStackParams>()
    return (
        <HomeStacker.Navigator>
            <HomeStacker.Screen name='BottomStack' component={BottomStack} options={{headerShown:false}}/>
            <HomeStacker.Screen name='UsersListScreen' component={UsersListScreen}/>
            <HomeStacker.Screen name='AppQueryScreen' component={AppQueryScreen}/>
        </HomeStacker.Navigator>
    )
}

export default HomeStack;