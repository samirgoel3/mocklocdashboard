import { useState } from "react";
import { AsyncStorageKeys } from "../../util/constants/async-storage-keys";
import SessionDetails from "../../util/session/session-details";


const useSettingsScreenController = ():SettingsScreenViewProps=>{

    const [userDetails, setuserDetails] = useState("");

    const getUserDetails =  async() =>{
        const data  =  JSON.stringify(await SessionDetails.get(AsyncStorageKeys.UserDetails));
        setuserDetails(data);
    }

    getUserDetails();


    return {
        testSettingscreenValue:userDetails,
    }

}


export default useSettingsScreenController;