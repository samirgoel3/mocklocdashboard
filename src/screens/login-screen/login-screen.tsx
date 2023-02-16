import React from 'react';
import LoginScreenController from './login-screen-controller';
import LoginScreenView from './login-screen-view';

const LoginScreen = () => {

    const CONTROLLER = LoginScreenController()

    return (
        <LoginScreenView
            test={CONTROLLER.test}
            testFunction={CONTROLLER.testFunction} />
    )
}

export default LoginScreen;