import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';

const YourQuerriesScreenView: React.FC<YourQuerriesScreenViewProps> = (props: YourQuerriesScreenViewProps) => {
    return (
        <View>
            <UIText value={props.testYourQuerriesScreenValue} />
        </View>
    )
}

export default YourQuerriesScreenView;