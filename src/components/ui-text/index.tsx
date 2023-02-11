import React from 'react'
import { Text } from 'react-native'

type UITextProps = {
  textType?: 'extraBold' | 'bold' | 'light' | 'extraLight' | 'regular' | 'medium' | 'semiBold'
  value: string ,
  color?: string ,
  size?: Number
}



const UIText: React.FunctionComponent<UITextProps> = (props:UITextProps) => {
  return (<Text
    style={{
      fontFamily: getFontTtype(props.textType),
      color: getFontColor(props.color),
      fontSize: getFontSize(props.size)
    }}
  >{props.value}</Text>)
}


const getFontTtype = (font: any) => {
  switch (font) {
    case 'extraBold':
      return 'Nunito-ExtraBold';
    case 'bold':
      return 'Nunito-Bold';
    case 'light':
      return 'Nunito-Light';
    case 'extraLight':
      return 'Nunito-ExtraLight';
    case 'regular':
      return 'Nunito-Regular';
    case 'medium':
      return 'Nunito-Medium';
    case 'semiBold':
      return 'Nunito-SemiBold';
    default:
      return 'Nunito-Regular';
  }
}

const getFontColor = (color: any) => {
  if (color) {
    return color;
  } else {
    return '#333333'
  }
}

const getFontSize = (size:any) => {
  if(size){
    return size;
  }else{
    return 30;
  }
}



export default UIText