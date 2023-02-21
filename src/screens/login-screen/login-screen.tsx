import React from 'react';
import LoginScreenController from './login-screen-controller';
import LoginScreenView from './login-screen-view';

const LoginScreen = () => {

    const CONTROLLER = LoginScreenController()

    return (
        <LoginScreenView
            onAboutAuthorClick={CONTROLLER.onAboutAuthorClick}
            onLoginClick={CONTROLLER.onLoginClick}
            test={CONTROLLER.test}
        />
    )
}

export default LoginScreen;