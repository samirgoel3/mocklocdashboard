import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';
import styles from './web-view-screen-styles';

const WebViewScreenView: React.FC<WebViewScreenViewProps> = (props: WebViewScreenViewProps) => {
    return (
        <View style={styles.container}>
            {/* <WebView source={{ uri: 'https://reactnative.dev/' }} /> */}
            <UIText value='Web will goes here' textType='extraBold' color='#333'/>
        </View>
    )
}

export default WebViewScreenView;