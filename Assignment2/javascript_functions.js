//Document with JS functions
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

//takes in an array of eleents and indicate wheter or not a target element is contained in input array
const myIncludes = (array, target)=>{
    for(let i = 0; i < array.length; i++)
        if (array[i] === target)
            return true;

    return false;
}

//takes in an array of elements and returns the index of the first encounter of a target element (if it is found)
const myIndexOf = (array, target)=>{
    for(let i = 0; i < array.length; i++)
        if (array[i] === target)
            return i;
    
    return -1;
}

//takes in an array of elements as well as an elementToAdd and append that element to the end of the array.
const myPush = (array, elementToAdd)=>{
    array[array.length] = elementToAdd;
}