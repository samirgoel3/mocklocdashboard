import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';

const ItinerariesScreenView = (props:ItinerariesScreenViewProps) => {
    return (
        <View>
            <UIText value={props.testItinerariesScreenViewValue}/>
        </View>
    )
}

export default ItinerariesScreenView ;