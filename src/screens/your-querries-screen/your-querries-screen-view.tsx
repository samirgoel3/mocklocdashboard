import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';
import styles from './your-querries-screen-style';

const YourQuerriesScreenView: React.FC<YourQuerriesScreenViewProps> = (props: YourQuerriesScreenViewProps) => {
    return (
        <View style={styles.container}>
            <UIText value={props.testYourQuerriesScreenValue} color={'white'}/>
        </View>
    )
}

export default YourQuerriesScreenView;