import React from 'react';
import { Alert, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import UiButton from '../../components/ui-button';
import UIText from '../../components/ui-text';
import RightIcon from '../../constants/icons/RightIcon';
import styles from './settings-screen-style';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SettingsScreenView: React.FC<SettingsScreenViewProps> = (props: SettingsScreenViewProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <UIText
                value='Settings'
                textType='bold'
                size={25}
                color={'white'}
                containerStyle={{ margin: 20 }}
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

            <TouchableOpacity style={styles.settings_item_style}
                onPress={ props.onYourQuerry}>
                <UIText value="Your Querries"
                    size={20}
                    color={"#999A9E"}
                    containerStyle={{ flex: 1 }}
                />
                <RightIcon />
            </TouchableOpacity>


            <TouchableOpacity style={styles.settings_item_style}
                onPress={props.onAppQuerry}>
                <UIText value="Application Querries"
                    size={20}
                    color={"#999A9E"}
                    containerStyle={{ flex: 1 }}
                />
                <RightIcon />
            </TouchableOpacity>


            <TouchableOpacity style={styles.settings_item_style}
                onPress={props.onViewUser}>
                <UIText value="All Users"
                    size={20}
                    color={"#999A9E"}
                    containerStyle={{ flex: 1 }}
                />
                <RightIcon />
            </TouchableOpacity>


            {/* <UIText value={props.testSettingscreenValue} /> */}

            <UiButton label='Logout' onButtonClick={props.logout} containerStyle={{ margin: 20 }} />
        </SafeAreaView>
    )
}

export default SettingsScreenView;