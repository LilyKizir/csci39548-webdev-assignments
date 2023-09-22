const myEach = (callbackfn, array)=>{
    for(let i = 0; i < array.length; i++)
        callbackfn(array[i], i, array);
}

const myMap = (callbackfn, array) =>{
    let new_arr = [];
    for(let i = 0; i < array.len; i++){
        new_element = callbackfn(array[i], i, array);
        new_arr.push(new_element);
    }
    return new_arr;
}

const myFilter = (callbackfn, array)=>{
    let new_arr = [];
    for(let i = 0; i < array.length; i++){
        if(callbackfn(array[i], i, array))
            new_arr.push(array[i]);
    }
    return new_arr;
}