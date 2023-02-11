import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text/index';
import styles from './login-screen-style';




const LoginScreenView:React.FC<LoginScreenViewProps> = (props:LoginScreenViewProps) => {
    return (
        <View>
            <UIText value={props.test} textType='extraBold' />
            <View style={styles.container}/>
        </View>
    )
}

export default LoginScreenView;