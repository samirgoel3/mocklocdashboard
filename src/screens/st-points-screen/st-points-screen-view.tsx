import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';
import StationaryPointIcon from '../../constants/icons/StPointIcon';
import StationaryPlaylistIcon from '../../constants/icons/StPlaylistIcon';
import SettingsIcon from '../../constants/icons/SettingIcon';
import ItinerariesIcon from '../../constants/icons/ItinerariesIcon';


const StPointsScreenView: React.FC<StPointsScreenViewProps> = (props: StPointsScreenViewProps) => {
    return (
        <View>
            <StationaryPointIcon/>
            <StationaryPlaylistIcon/>
            <SettingsIcon/>
            <ItinerariesIcon/>
            <UIText value={props.testStPointScreenValue} />
        </View>
    )
}

export default StPointsScreenView;