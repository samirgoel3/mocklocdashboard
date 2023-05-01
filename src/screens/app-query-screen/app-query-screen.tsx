import React from 'react';
import useAppQuertScreenViewController from './app-query-screen-controller';
import AppQueryScreenView from './app-query-screen-view';

const AppQueryScreen = ()=>{
    const CONTROLLER = useAppQuertScreenViewController();
    return (
        <AppQueryScreenView
        appQueryTestValue={CONTROLLER.appQueryTestValue}/>
    )
}


export default AppQueryScreen ; 