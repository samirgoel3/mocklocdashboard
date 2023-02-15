import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StPointsScreen from '../../screens/st-points-screen';
import StPlaylistScreen from '../../screens/st-playlists-screen';
import ItinerariesScreen from '../../screens/itineraries-screen';
import YourQuerriesScreen from '../../screens/your-querries-screen';



const BottomStack = () => { 
    const BottomStacker = createBottomTabNavigator<BottomStackParams>();
    return (
        <BottomStacker.Navigator >
            <BottomStacker.Screen name='StationaryPointsScreen' component={StPointsScreen} />
            <BottomStacker.Screen name='StationaryPalylistScreen' component={StPlaylistScreen} />
            <BottomStacker.Screen name='ItinerariesScreen' component={ItinerariesScreen} />
            <BottomStacker.Screen name='YourQueriesScreen' component={YourQuerriesScreen} />
        </BottomStacker.Navigator>
    )
}
export default BottomStack;


  
