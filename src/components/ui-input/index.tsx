import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './ui-input-styles';

interface UIInputProps {
    type?: 'password' | 'email' | 'search'
}

const UIInput: React.FunctionComponent<UIInputProps> = (props: UIInputProps) => {
    return (
        <View style={styles.root}>
            <TextInput/>
        </View>
    )
}

const getBorderStyle = (type:string) =>{
    if(type == "password"){ return styles.root}
    else{ return null;}
}


export default UIInput;