import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import SplashStack from './src/navigators/splash-stack';
import { store } from './src/store/store';

function App(): JSX.Element {




  return (
    <Provider store={store}>
      <NavigationContainer>
          <SplashStack />
      </NavigationContainer>
    </Provider>
  );
}







export default App;
