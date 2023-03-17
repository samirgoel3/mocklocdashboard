import React from 'react';
import { SafeAreaView, View } from 'react-native';
import UIText from '../../components/ui-text';
import StationaryPointIcon from '../../constants/icons/StPointIcon';
import StationaryPlaylistIcon from '../../constants/icons/StPlaylistIcon';
import SettingsIcon from '../../constants/icons/SettingIcon';
import ItinerariesIcon from '../../constants/icons/ItinerariesIcon';
import styles from './st-points.screen-styles';


const StPointsScreenView: React.FC<StPointsScreenViewProps> = (props: StPointsScreenViewProps) => {
    return (
        <SafeAreaView style={{backgroundColor:'#333', flex:1}}>
            <StationaryPointIcon/>
            <StationaryPlaylistIcon/>
            <SettingsIcon/>
            <ItinerariesIcon/>
            <UIText value={props.testStPointScreenValue} />
        </SafeAreaView>
    )
}

export default StPointsScreenView;