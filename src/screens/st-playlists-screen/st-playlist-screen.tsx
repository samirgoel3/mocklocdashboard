import React from 'react';
import useStPlaylistScreenController from './st-playlist-screen-controller';
import StPlaylistScreenView from './st-playlist-screen-view';

const StPlaylistScreen = ()=>{
    const CONTROLLER = useStPlaylistScreenController()

    return (
        <StPlaylistScreenView testStPlaylistScreenValue={CONTROLLER.testStPlaylistScreenValue}/>
    )
}

export default StPlaylistScreen;