import React, { Component } from 'react'
import { Text, View } from 'react-native/types'


type UITextProps = {
    textType?: 'regular' | 'bold' | 'light'
  }



const UIText:React.FunctionComponent<UITextProps> = ({})=>{
    return (<Text></Text>)
}

export default UIText