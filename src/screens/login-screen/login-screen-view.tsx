import React from 'react';
import { Button, View } from 'react-native';
import UIInput from '../../components/ui-input';
import UIText from '../../components/ui-text/index';




const LoginScreenView:React.FC<LoginScreenViewProps> = (props:LoginScreenViewProps) => {
    return (
        <View>
            <UIText value={props.test} textType='extraBold' />
            <UIInput type='email'/>
            <Button title='Test Save user details' onPress={()=>{props.testFunction()}}/>

        </View>
    )
}

export default LoginScreenView;