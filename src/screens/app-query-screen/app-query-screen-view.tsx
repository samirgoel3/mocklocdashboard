import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';
import styles from './app-quer-screen-styles';

const AppQueryScreenView: React.FC<AppQueryScreenViewProps> = (props: AppQueryScreenViewProps) => {
    return (
        <View style={styles.container}>
            <UIText value={props.appQueryTestValue} />
        </View>
    )
}

export default AppQueryScreenView ; 