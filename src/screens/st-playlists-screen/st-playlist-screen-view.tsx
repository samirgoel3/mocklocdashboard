import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';

const StPlaylistScreenView:React.FC<StPlaylistScreenViewProps> = (props:StPlaylistScreenViewProps)=>{
    return (
        <View>
            <UIText value={props.testStPlaylistScreenValue} />
        </View>
    )
}

export default StPlaylistScreenView ;