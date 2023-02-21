import SettingsScreenView from "./settings-screen-view";
import useSettingsScreenController from './settings-screen-controller';
const SettingsScreen = () => {
    const CONTROLLER = useSettingsScreenController()
    return (
        <SettingsScreenView
            testSettingscreenValue={CONTROLLER.testSettingscreenValue}
            userEmail={CONTROLLER.userEmail}
            userImage={CONTROLLER.userName}
            userName={CONTROLLER.userName}
        />
    )
}

export default SettingsScreen;