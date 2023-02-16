import React from 'react';
import { Button, View } from 'react-native';
import UIText from '../../components/ui-text';

const ItinerariesScreenView = (props:ItinerariesScreenViewProps) => {
    return (
        <View>
            <UIText value={props.testItinerariesScreenViewValue}/>
            <Button onPress={props.onButtonClick} title={'Test'}/>
        </View>
    )
}

export default ItinerariesScreenView ;