import React from 'react';
import { Alert, View } from 'react-native';
import UiButton from '../../components/ui-button';
import UIInput from '../../components/ui-input';
import UIText from '../../components/ui-text/index';
import styles from './login-screen-style';




const LoginScreenView: React.FC<LoginScreenViewProps> = (props: LoginScreenViewProps) => {
    return (
        <View style={styles.container}>

            <UIText value={props.test}/>

            <UIText
                value={"Enter Email"}
                textType='bold'
                size={15}
                containerStyle={styles.input_heading}
            />
            <UIInput
                type='email'
                onChangeText={(value) => { }}
                containerStylestyles={styles.input}
            />

            <UIText
                value={"Enter Password"}
                textType='bold'
                size={15}
                containerStyle={styles.input_heading} />

            <UIInput
                type='password'
                onChangeText={(value) => { }}
                containerStylestyles={styles.input_heading} />


            <UiButton
                label='Testing button'
                onButtonClick={() => { Alert.alert("Working") }}
            />

            <UiButton
                label='About Author'
                onButtonClick={props.onAboutAuthorClick}
                containerStyle={{ width:150, alignSelf:'flex-end', backgroundColor:'white'}}
                textStyle={{color:'#333'}}
            />

        </View>
    )
}

export default LoginScreenView;