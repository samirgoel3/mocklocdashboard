import React, { useState } from 'react';
import { TextInput, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EyeCloseIcon from '../../constants/icons/EyeCloseIcon';
import EyeOpenIcon from '../../constants/icons/EyeOpenIcon';
import { styles } from './ui-input-styles';

interface UIInputProps {
    type?: 'password' | 'email' | 'search',
    onChangeText: (val: string) => void,
    containerStylestyles?: ViewStyle;

}

const UIInput: React.FunctionComponent<UIInputProps> = (props: UIInputProps) => {

    const [isTexttVivisble, setTextVisibility] = useState(props.type === 'password' ? false : true);


    return (
        <View style={[styles.root, props.containerStylestyles]}>
            <TextInput
                style={[styles.input]}
                secureTextEntry={!isTexttVivisble}
                onChangeText={props.onChangeText}
            />
            {
                props.type === 'password' ?
                    <TouchableOpacity onPress={() => { setTextVisibility(!isTexttVivisble) }}>
                        {isTexttVivisble ? <EyeOpenIcon /> : <EyeCloseIcon />}
                    </TouchableOpacity>
                    : null
            }


        </View>
    )
}



export default UIInput;