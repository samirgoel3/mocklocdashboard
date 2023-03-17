import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import UIText from '../../../components/ui-text/index';
import styles from './user-card-styles';

const UserCard: React.FC<UserCardViewProps> = (props: UserCardViewProps) => {
    return (
        <TouchableOpacity style={styles.root} onPress={()=>{Alert.alert("Pass Callback from here")}}>
            <View style={styles.test_image} />
            <View style={styles.text_container}>
                <UIText value={props.userName}
                    color='white'
                    size={17}
                    textType={'extraBold'} />
                <UIText
                    value={props.userEmail}
                    color='white'
                    size={15}
                />
            </View>

        </TouchableOpacity>
    )
}



export default UserCard;