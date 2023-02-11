import useyourQuerriesScreenViewController from "./your-querries-screen-controller";
import YourQuerriesScreenView from "./your-querries-screen-view";

const YourQuerriesScreen = () => {
    const CONTROLLER = useyourQuerriesScreenViewController()
    return (
        <YourQuerriesScreenView testYourQuerriesScreenValue={CONTROLLER.testYourQuerriesScreenValue} />
    )
}

export default YourQuerriesScreen;