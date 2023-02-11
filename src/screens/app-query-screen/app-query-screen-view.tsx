import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';

const AppQueryScreenView: React.FC<AppQueryScreenViewProps> = (props: AppQueryScreenViewProps) => {
    return (
        <View>
            <UIText value={props.appQueryTestValue} />
        </View>
    )
}

export default AppQueryScreenView ; 