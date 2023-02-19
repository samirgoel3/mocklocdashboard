import React from 'react';
import useItinerariesScreenController from './itineraries-screen-controller';
import ItinerariesScreenView from './itineraries-screen-view';

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