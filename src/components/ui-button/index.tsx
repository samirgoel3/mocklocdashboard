import React from 'react';
import { Text, TextStyle, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './ui-button-styles';

interface UiButtonProps {
    type?: 'filled' | 'filled',
    label: string,
    fontStyle?: 'extraBold' | 'bold' | 'light' | 'extraLight' | 'regular' | 'medium' | 'semiBold'
    textStyle?: TextStyle,
    containerStyle?: ViewStyle
    onButtonClick: () => void

}

const UiButton: React.FC<UiButtonProps> = (props: UiButtonProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                props.containerStyle
            ]}
            onPress={props.onButtonClick}
        >
            <Text style={[
                styles.text,
                { fontFamily: props.fontStyle ? getFontTtype(props.fontStyle) : 'Nunito-Bold' },
                props.textStyle
            ]}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )
}

const getFontTtype = (font: any) => {
    switch (font) {
        case 'extraBold':
            return 'Nunito-ExtraBold';
        case 'bold':
            return 'Nunito-Bold';
        case 'light':
            return 'Nunito-Light';
        case 'extraLight':
            return 'Nunito-ExtraLight';
        case 'regular':
            return 'Nunito-Regular';
        case 'medium':
            return 'Nunito-Medium';
        case 'semiBold':
            return 'Nunito-SemiBold';
        default:
            return 'Nunito-Regular';
    }
}




export default UiButton;