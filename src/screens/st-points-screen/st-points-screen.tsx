import StPointsScreenView from "./st-points-screen-view";
import useStPointsScreenViewController from "./st-points-screen-controller";

const StPointsScreen = () => {
    const CONTROLLER = useStPointsScreenViewController();
    return (
        <StPointsScreenView testStPointScreenValue={CONTROLLER.testStPointScreenValue} />
    )
}

export default StPointsScreen;