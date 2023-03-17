const a = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11 ]], 12, 13, 14]



let resultantArray = [];

const flattenArr = (array) =>{
    
    for(var i = 0 ; i < array.length ; i++){
        if(Array.isArray(array[i])){
            flattenArr(array[i])
            // console.log("** caught Array")
        }else{
            // console.log("** caught Single element")
            resultantArray.push(array[i])
        }
    }
    return resultantArray ;
}


console.log(flattenArr(a));


