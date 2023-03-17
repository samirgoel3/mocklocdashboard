import React from 'react';
import { View } from 'react-native'
import UiButton from '../../components/ui-button';
import UIText from '../../components/ui-text';


const ChildOne = (props: any) => {
    const { data, someFunctionality } = props

    const [example, setExample] = React.useState(0)

    { console.log("Rendering Child One") }
    { console.log("DATA = "+JSON.stringify(data)) }

    const test  = {marginTop:20}

    return (
        <View style={test}>
            <UIText
                value='I am Child'
                color='#333'
                size={20}
                textType={'extraBold'}
            />
            <UiButton label='test' onButtonClick={()=>{ setExample(89)}}/>
            <UiButton label='Pring Log in parent' onButtonClick={someFunctionality}/>
        </View>
    )
}

export default React.memo(ChildOne);