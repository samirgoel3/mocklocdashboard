import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import EarthInactiveIcon from '../../constants/icons/EarthInactiveIcon';
import ItinerariesIcon from '../../constants/icons/ItinerariesIcon';
import ItinerariesInActiveIcon from '../../constants/icons/ItinerariesInactiveIcon';
import SettingsIcon from '../../constants/icons/SettingIcon';
import StationaryPlaylistIcon from '../../constants/icons/StPlaylistIcon';
import StationaryPointIcon from '../../constants/icons/StPointIcon';
import ItinerariesScreen from '../../screens/itineraries-screen';
import SettingsScreen from '../../screens/settings-screen';
import StPlaylistScreen from '../../screens/st-playlists-screen';
import StPointsScreen from '../../screens/st-points-screen';
import SettingsInActiveIcon from '../../constants/icons/SettingIconInActive';



const BottomStack = () => {
    const BottomStacker = createBottomTabNavigator<BottomStackParams>();
    return (
        <BottomStacker.Navigator >
            <BottomStacker.Screen
                name='StationaryPointsScreen'
                component={StPointsScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'ST-Points',
                    tabBarLabelStyle: {
                        fontFamily: 'Nunito-ExtraBold',
                    },
                    tabBarActiveTintColor: '#333',
                    tabBarIcon: ({ focused }) => {
                        if (focused) { return <StationaryPointIcon /> }
                        else { return <EarthInactiveIcon /> }

                    }
                }} />
            <BottomStacker.Screen
                name='StationaryPalylistScreen'
                component={StPlaylistScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Playlists',
                    tabBarLabelStyle: {
                        fontFamily: 'Nunito-ExtraBold',
                    },
                    tabBarActiveTintColor: '#333',
                    tabBarIcon: ({ focused }) => {
                        if (focused) { return <StationaryPlaylistIcon /> }
                        else { return <EarthInactiveIcon /> }

                    }
                }}
            />
            <BottomStacker.Screen
                name='ItinerariesScreen'
                component={ItinerariesScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Itineraries',
                    tabBarLabelStyle: {
                        fontFamily: 'Nunito-ExtraBold',
                    },
                    tabBarActiveTintColor: '#333',
                    tabBarIcon: ({ focused }) => {
                        if (focused) { return <ItinerariesIcon /> }
                        else { return <ItinerariesInActiveIcon /> }

                    }
                }} />
            <BottomStacker.Screen
             name='SettingsScreen'
              component={SettingsScreen} 
              options={{
                headerShown: false,
                tabBarLabel: 'Settings',
                tabBarLabelStyle: {
                    fontFamily: 'Nunito-ExtraBold',
                },
                tabBarActiveTintColor: '#333',
                tabBarIcon: ({ focused }) => {
                    if (focused) { return <SettingsIcon /> }
                    else { return <SettingsInActiveIcon /> }

                }
            }} />
        </BottomStacker.Navigator>
    )
}




export default BottomStack;



