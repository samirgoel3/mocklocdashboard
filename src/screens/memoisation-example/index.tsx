import React from 'react';
import { SafeAreaView } from 'react-native';
import UiButton from '../../components/ui-button/index';
import UIText from '../../components/ui-text';
import ChildOne from './child-one';

const MemoisationExample = () => {
    const [counter, setCounter] = React.useState(0)

    
    /**
     * Technique for using meoisation object and values
     */
    const unMeomisedObject = {
        name: 'samir Goel',
        email: 'samirgoel34@gmail.com'
    }
    const memoisedobj = React.useMemo(() => unMeomisedObject, [])


    const unMemoisedFunction = () => {
        console.log("I am doing some work :)")
    }
    const memoisedFunction = React.useCallback(()=>{unMemoisedFunction()},[])




    return (
        <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <UIText value='Memoisation Example' />
            <UIText value={'Counter ' + counter} />
            <UiButton label='Increase Counter' onButtonClick={() => { setCounter(counter + 1) }} />
            <ChildOne
                data={memoisedobj}
                someFunctionality={memoisedFunction}
            />
        </SafeAreaView>
    )
}







export default MemoisationExample;