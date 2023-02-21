import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';
import styles from './settings-screen-style';
const SettingsScreenView: React.FC<SettingsScreenViewProps> = (props: SettingsScreenViewProps) => {
    return (
        <View style={styles.container}>
            <UIText
                value='Settings'
                textType='bold'
                size={25}
                color={'white'}
                containerStyle={{ marginTop: 10 }}
            />

            <View style={styles.user_detail_container}>
                <View style={{ width: 80, height: 80, borderRadius: 100, backgroundColor: '#bbbbbb' }} />
                <View style={styles.user_name_email_container}>
                    <UIText
                        value={props.userName}
                        color='white'
                        size={20}
                        textType='bold'
                    />
                    <UIText
                        value={props.userEmail}
                        color='#bbb'
                        size={16}
                    />
                </View>

            </View>

            <UIText value={props.testSettingscreenValue} />
        </View>
    )
}

export default SettingsScreenView;