import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';

const ProfileQueryScreenView:React.FC<ProfileQueryScreenViewProps> = (props:ProfileQueryScreenViewProps) =>{
    return (
        <View>
            <UIText value={props.testProfileQueryScreenValue}/>
        </View>
    )
}

export default ProfileQueryScreenView;