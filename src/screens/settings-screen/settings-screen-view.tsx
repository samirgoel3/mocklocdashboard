import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';

const SettingsScreenView: React.FC<SettingsScreenViewProps> = (props: SettingsScreenViewProps) => {
    return (
        <View>
            <UIText value={props.testSettingscreenValue} />
        </View>
    )
}

export default SettingsScreenView;