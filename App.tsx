import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, View } from 'react-native';
import UIText from './src/components/ui-text';
import AppQueryScreen from './src/screens/app-query-screen/index';
import ItinerariesScreen from './src/screens/itineraries-screen/itineraries-screen';
import LoginScreen from './src/screens/login-screen';
import ProfileQueryScreen from './src/screens/profile-query-screen/index';
import StPlaylistScreen from './src/screens/st-playlists-screen';
import StPointsScreen from './src/screens/st-points-screen';
import UsersListScreen from './src/screens/user-list-screen';
import WebViewScreen from './src/screens/web-view-screen';
import YourQuerriesScreen from './src/screens/your-querries-screen';


function App(): JSX.Element {

  const Stack = createNativeStackNavigator();
  


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MyScreen' component={YourQuerriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UIText value='I am Home Screen' textType='extraBold' />
      <Button title='Move To App Querry Screen' onPress={()=>{ navigation.navigate('MainScreen')}}/>
    </View>
  );
}





const BottomStatck = ()=>{
  const BottomStack = createBottomTabNavigator();
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen name="Itineraries" component={Itineraries} />
      <BottomStack.Screen name="Stationary Points" component={StationaryPoints} />
      <BottomStack.Screen name="Stationary Playlists" component={StationaryPlaylist} />
      <BottomStack.Screen name="Your Querries" component={YourQuerries} />
    </BottomStack.Navigator>
  );
  
}


function Itineraries({ }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UIText value='Itineraries Screen' textType='bold' />
    </View>
  );
}

function StationaryPoints({ }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UIText value='Stationary Points Screen' textType='bold' />
    </View>
  );
}

function StationaryPlaylist({ }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UIText value='Stationary Playlist Screen' textType='bold' />
    </View>
  );
}

function YourQuerries({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UIText value='Querry Screen' textType='bold' />
      <Button title='Open Profile Screen' onPress={()=>{ navigation.navigate('home_screen') }}/>
    </View>
  );
}







export default App;
