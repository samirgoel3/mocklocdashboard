import SettingsScreenView from "./settings-screen-view";
import useSettingsScreenController from './settings-screen-controller';
const SettingsScreen = ()=>{
    const CONTROLLER = useSettingsScreenController()
    return (
        <SettingsScreenView testSettingscreenValue={CONTROLLER.testSettingscreenValue}/>
    )
}

export default SettingsScreen;