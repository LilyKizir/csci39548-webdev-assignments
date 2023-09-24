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