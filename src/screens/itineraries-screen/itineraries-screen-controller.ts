import { useNavigation } from "@react-navigation/native";
import { AllScreenNavigationProps } from "../../navigators/@types";

const useItinerariesScreenController = (): ItinerariesScreenViewProps => {
    const NAVIGATION = useNavigation<AllScreenNavigationProps>();

    const tesNavigation = () => { NAVIGATION.navigate('AppQueryScreen') }

    return {
        testItinerariesScreenViewValue: 'This is for itineraries screen',
        onButtonClick: tesNavigation
    }
}

export default useItinerariesScreenController;