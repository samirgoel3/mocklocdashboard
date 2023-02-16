import React, { Component } from 'react'
import ItinerariesScreenView from './itineraries-screen-view'
import useItinerariesScreenController from './itineraries-screen-controller';

const ItinerariesScreen = () => {

    const CONTROLLER = useItinerariesScreenController()

    return (
        <ItinerariesScreenView
            testItinerariesScreenViewValue={CONTROLLER.testItinerariesScreenViewValue}
            onButtonClick={CONTROLLER.onButtonClick}
        />
    )
}

export default ItinerariesScreen;