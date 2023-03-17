import React from 'react';
import { ListRenderItem, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserCard from './user-card';
import styles from './users-list-screen-styles';
import { usersList } from './mocks';


const UserListScreenView: React.FC<UsersListScreenViewProps> = (props: UsersListScreenViewProps) => {

    const renderItem: ListRenderItem<UserCardViewProps> = ({ item }) => <UserCard
        userEmail={item.userEmail}
        userName={item.userName}
        userImage={item.userImage}
    />;


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                horizontal={false}
                data={usersList}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}



export default UserListScreenView;