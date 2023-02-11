import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';

const StPointsScreenView:React.FC<StPointsScreenViewProps> = (props:StPointsScreenViewProps)=>{
    return (
        <View>
            <UIText value={props.testStPointScreenValue}/>
        </View>
    )
}

export default StPointsScreenView ;