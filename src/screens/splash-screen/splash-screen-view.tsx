import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';
import styles from './splash-screen-styles';

const SplashScreenView: React.FC<SplashScreenViewParam> = (props: SplashScreenViewParam) => {
    return (
        <View style={styles.container}>
            <UIText
                value={props.splashValue}
                textType={'extraBold'}
                color={'#333'} />
        </View>
    )
}

export default SplashScreenView;
