import React from 'react'
import useProfileQueryScreenController from './profile-query-screen-controller'
import ProfileQueryScreenView from './profile-query-screen-view'

const ProfileQueryScreen = () => {
    const CONTROLLER = useProfileQueryScreenController()
    return (
        <ProfileQueryScreenView testProfileQueryScreenValue={CONTROLLER.testProfileQueryScreenValue} />
    )
}

export default ProfileQueryScreen ;