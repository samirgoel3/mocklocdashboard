import React from 'react';
import { View } from 'react-native';
import UIText from '../../components/ui-text';

const UserListScreenView: React.FC<UsersListScreenViewProps> = (props: UsersListScreenViewProps) => {
    return (
        <View>
            <UIText value={props.testUsersListScreenValue} />
        </View>
    )
}

export default UserListScreenView;