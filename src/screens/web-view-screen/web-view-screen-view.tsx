import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';

const WebViewScreenView: React.FC<WebViewScreenViewProps> = (props: WebViewScreenViewProps) => {
    return (
        <View>
            <UIText value={props.testWebViewScreenValue} />
        </View>
    )
}

export default WebViewScreenView;