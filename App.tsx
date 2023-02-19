import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import useAppController from './app-controller';
import AuthStack from './src/navigators/auth-stack/auth-stack';
import HomeStack from './src/navigators/home-stack';
import { store } from './src/store/store';
import { Provider } from 'react-redux'
function App(): JSX.Element {

  const CONTROLLER = useAppController();
  return (
    <Provider store={store}>
      <NavigationContainer>
        {CONTROLLER.isUserLoggedin ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    </Provider>
  );
}



export default App;
