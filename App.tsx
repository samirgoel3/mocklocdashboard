import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStack from './src/navigators/auth-stack/auth-stack';
import HomeStack from './src/navigators/home-stack';

const Loggedin = true;

function App(): JSX.Element {

  return (
    <NavigationContainer>
      {Loggedin ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}



export default App;
