import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import SplashScreen from './src/screens/splash-screen';
import { store } from './src/store/store';
import useAppController from './app-controller';
import HomeStack from './src/navigators/home-stack';
import AuthStack from './src/navigators/auth-stack';
import UIText from './src/components/ui-text';
import SplashStack from './src/navigators/splash-stack';

function App(): JSX.Element {




  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <SplashStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}







export default App;
