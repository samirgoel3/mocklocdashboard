import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './ui-input-styles';

interface UIInputProps {
    type?: 'password' | 'email' | 'text' | 'numeric'
}

const UIInput: React.FunctionComponent<UIInputProps> = (props: UIInputProps) => {
    return (
        <View style={styles.root}>
            <TextInput/>
        </View>
    )
}


export default UIInput;