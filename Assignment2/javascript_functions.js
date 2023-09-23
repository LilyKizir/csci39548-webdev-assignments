const mySome = (callbackfn, array)=>{
    for(let i =0; i<array.length; i++){
        if(callbackfn(array[i],i,array)){
            return true;
        }
    }
    return false;
}

const myEvery = (callbackfn, array)=>{
    for(let i = 0; i<array.length;i++){
        if(callbackfn(array[i],i,array) === false){
            return false;
        }
    }
    return true;
}

const myReduce = (callbackfn, array, initialVal)=>{
    let num = 0;
    for(let i = 0; i<array.length;i++){
        num = callbackfn(num,array[i],i,array);
    }
    if(initialVal != undefined){
        return num + initialVal;
    }
    else return num;
}
