export const checkEmailIsValid = (value:string) =>{
    if(!value.includes('@')){return false}
    else{ return true ;}
}

