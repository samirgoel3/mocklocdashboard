/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar, Text, useColorScheme
} from 'react-native';
import Trophy from './assets/images/trophy.svg';

import { Colors } from 'react-native/Libraries/NewAppScreen';




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ padding: 10 }}>
        <Text style={{ fontFamily: 'Nunito-Black', fontSize: 40 }}>Black</Text>
        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 40 }}>Bold</Text>
        <Text style={{ fontFamily: 'Nunito-ExtraBold', fontSize: 40 }}>Extra-Bold</Text>
        <Text style={{ fontFamily: 'Nunito-ExtraLight', fontSize: 40 }}>Extra light</Text>
        <Text style={{ fontFamily: 'Nunito-Light', fontSize: 40 }}>Light</Text>
        <Text style={{ fontFamily: 'Nunito-Medium', fontSize: 40 }}>Medium</Text>
        <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 40 }}>Regular</Text>
        <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 40 }}>Semi Bold</Text>
        <Trophy height={100} width={100} />
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
