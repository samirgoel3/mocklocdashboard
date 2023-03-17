import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import UIText from '../../components/ui-text';





const StPlaylistScreenView: React.FC<StPlaylistScreenViewProps> = (props: StPlaylistScreenViewProps) => {
    return (
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <UIText value='Playlist Screen' textType='extraBold' color='#333333'/>
        </SafeAreaView>
    )
}

export default StPlaylistScreenView;