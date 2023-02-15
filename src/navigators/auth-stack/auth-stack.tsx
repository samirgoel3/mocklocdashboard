import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/login-screen';
import WebViewScreen from '../../screens/web-view-screen';

const AuthStack = () => {
    const AuthStacker = createNativeStackNavigator<AuthStackParamList>();
    return (
        <AuthStacker.Navigator >
            <AuthStacker.Screen name='LoginScreen' component={LoginScreen} />
            <AuthStacker.Screen name='WebViewScreen' component={WebViewScreen} />
        </AuthStacker.Navigator>
    )
}

export default AuthStack;
