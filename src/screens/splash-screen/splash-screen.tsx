import useSplashScreenController from "./splash-screen-controller";
import SplashScreenView from "./splash-screen-view";

const SplashScreen = () => {
    const CONTROLLER = useSplashScreenController()
    return (
        <SplashScreenView splashValue={CONTROLLER.splashValue} />
    )
}

export default SplashScreen;