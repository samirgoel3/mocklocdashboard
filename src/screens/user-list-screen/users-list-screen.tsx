import UserListScreenView from './users-list-screen-view';
import useUsersListScreenViewController from './user-list-screen-controller';

const UsersListScreen = () => {
    const CONTROLLER = useUsersListScreenViewController();
    return (
        <UserListScreenView testUsersListScreenValue={CONTROLLER.testUsersListScreenValue} />
    )
}

export default UsersListScreen;