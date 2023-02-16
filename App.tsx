import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import useAppController from './app-controller';
import AuthStack from './src/navigators/auth-stack/auth-stack';
import HomeStack from './src/navigators/home-stack';

function App(): JSX.Element {

  const CONTROLLER = useAppController();
  return (
    <NavigationContainer>
      {CONTROLLER.isUserLoggedin ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}



export default App;
