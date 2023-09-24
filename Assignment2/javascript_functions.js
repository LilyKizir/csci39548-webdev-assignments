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

//Checks every element until it finds one that returns true as an input to a given function.
const mySome = (callbackfn, array)=>{
    for(let i =0; i<array.length; i++){
        if(callbackfn(array[i],i,array)){
            return true;
        }
    }
    return false;
}

//Checks every element until it finds one that does not return true as an input to a given function.
const myEvery = (callbackfn, array)=>{
    for(let i = 0; i<array.length;i++){
        if(callbackfn(array[i],i,array) === false){
            return false;
        }
    }
    return true;
}

//Goes through every element and executes the given function on each iteration, returning the cumulative value + initial value (optional).
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