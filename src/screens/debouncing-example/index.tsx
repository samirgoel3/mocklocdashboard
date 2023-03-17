import React from 'react';
import { View } from 'react-native';
import UIInput from '../../components/ui-input';
import UIText from '../../components/ui-text';

const DebouncingExample = () => {

    const [currentVal, setCurrentValue] = React.useState("Test")



    const funcSetCurrentValue = (mVal:string) => {
        setCurrentValue(mVal)
    }

    const debouncer = (callbackFunction:any) => {

        // let timer: any
        // return function (...args: any) {
        //     clearTimeout(timer)
        //     timer = setTimeout(() => callbackFunction(), 3000)
        // }

        let timer:any;
        return  (...args:any) => {
            console.log("*******")
            clearTimeout(timer)
            timer = setTimeout(() => {callbackFunction.apply(this, args)}, 3000)
        }
        
    }

    const myFunction = () => {
        console.log("this is my function ")
    }


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 10 }}>
            <UIInput onChangeText={(val) => { debouncer(myFunction)() }} type={'email'} />
            <UIText value={currentVal} />
        </View>
    )
}


export default DebouncingExample