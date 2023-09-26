//JS functions
const myEach = (callbackfn, array) => {
  for (let i = 0; i < array.length; i++) callbackfn(array[i], i, array);
};

const myMap = (callbackfn, array) => {
  let new_arr = [];
  for (let i = 0; i < array.length; i++) {
    new_element = callbackfn(array[i], i, array);
    new_arr.push(new_element);
  }
  return new_arr;
};

const myFilter = (callbackfn, array) => {
  let new_arr = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i], i, array)) new_arr.push(array[i]);
  }
  return new_arr;
};

//Checks every element until it finds one that returns true as an input to a given function.
const mySome = (target, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= target) {
      return true;
    }
  }
  return false;
};

//Checks every element until it finds one that does not return true as an input to a given function.
const myEvery = (target, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < target) {
      return false;
    }
  }
  return true;
};

//Goes through every element and executes the given function on each iteration, returning the cumulative value + initial value (optional).
const myReduce = (array, initialVal) => {
  let sum;
  if (initialVal.length > 0) {
    sum = JSON.parse(initialVal);
  } else sum = 0;
  console.log(sum);
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

//takes in an array of eleents and indicate wheter or not a target element is contained in input array
const myIncludes = (array, target) => {
  for (let i = 0; i < array.length; i++) if (array[i] === target) return true;

  return false;
};

//takes in an array of elements and returns the index of the first encounter of a target element (if it is found)
const myIndexOf = (array, target) => {
  for (let i = 0; i < array.length; i++) if (array[i] === target) return i;

  return -1;
};

//takes in an array of elements as well as an elementToAdd and append that element to the end of the array.
const myPush = (array, elementToAdd) => {
  array[array.length] = elementToAdd;
};

// Without using the native “Array.prototype.lastIndexOf” method of JavaScript, compose a function titled “myLastIndexOf” that will take in an array of elements and returns the index of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.
const myLastIndexOf = (array, target) => {
  let index = -1;
  for (let i = 0; i < array.length; i++) if (array[i] === target) index = i;

  return index;
};
// Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an object and return all of the keys of the key:value pairs of that object.
const grabKeys = (object) => {
  let keys = [];
  for (let key in object) keys.push(key);

  return keys;
};
// Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” that will take in an object and return all of the values of the key:value pairs of that object.
const grabValues = (object) => {
  let values = [];
  for (let key in object) values.push(object[key]);

  return values;
};

/*JS Buttons
Structure for those with callbackfn:
1. Create custom function (described in the div with h3 in index.html)
2. Get button and result
3. Create click event for button:
    3a. Get array from input text
    3b. Optionally create new array
    3c. Call the my- function
    3d. Update result
    3e. Console log
*/
window.onload = function () {
  //myEach() FUNCTION BUTTON
  const myEachCallFunction = (element, index, array) => {
    array[index] = element * 2;
  };
  var myEachButton = document.getElementById("myEachButton");
  var myEachRes = document.getElementById("myEachResult");
  myEachButton.addEventListener("click", () => {
    var myEachArray = JSON.parse(document.getElementById("myEachInput").value);
    myEach(myEachCallFunction, myEachArray);
    myEachRes.innerHTML = myEachArray;
    console.log(myEachArray);
  });

  //myMap() FUNCTION BUTTON
  const myMapCallFunction = (element) => {
    return element * 10;
  };
  var myMapButton = document.getElementById("myMapButton");
  var myMapRes = document.getElementById("myMapResult");
  myMapButton.addEventListener("click", () => {
    var myMapArray = JSON.parse(document.getElementById("myMapInput").value);
    let newMapArray = myMap(myMapCallFunction, myMapArray); //unlike myEach() this returns the new array
    myMapRes.innerHTML =
      "Old Array: " + myMapArray + "<br>" + "New Array: " + newMapArray;
    console.log(newMapArray);
  });

  //myFilter() FUNCTION BUTTON
  const myFilterCallFunction = (value) => {
    return value >= 10;
  };
  var myFilterButton = document.getElementById("myFilterButton");
  var myFilterRes = document.getElementById("myFilterResult");

  myFilterButton.addEventListener("click", () => {
    var myFilterArray = JSON.parse(
      document.getElementById("myFilterInput").value
    );
    let newFilterArray = myFilter(myFilterCallFunction, myFilterArray);
    myFilterRes.innerHTML =
      "Old Array: " + myFilterArray + "<br>" + "New Array: " + newFilterArray;
    console.log(newFilterArray);
  });

  //mySome() FUNCTION BUTTON
  const mySomeCallFunction = (value) => {
    return value >= 10;
  };
  var mySomeButton = document.getElementById("mySomeButton");
  var mySomeRes = document.getElementById("mySomeResult");

  mySomeButton.addEventListener("click", () => {
    var mySomeArray = JSON.parse(document.getElementById("mySomeInput").value);
    var mySomeTarget = JSON.parse(
      document.getElementById("mySomeTarget").value
    );

    let mySomeAnswer = mySome(mySomeTarget, mySomeArray);
    mySomeRes.innerHTML = "Answer: " + mySomeAnswer;
    console.log(mySomeAnswer);
  });

  //myEvery() FUNCTION BUTTON
  var myEveryButton = document.getElementById("myEveryButton");
  var myEveryRes = document.getElementById("myEveryResult");

  myEveryButton.addEventListener("click", () => {
    var myEveryArray = JSON.parse(
      document.getElementById("myEveryInput").value
    );
    var myEveryTarget = JSON.parse(
      document.getElementById("myEveryTarget").value
    );
    let myEveryAnswer = myEvery(myEveryTarget, myEveryArray);
    myEveryRes.innerHTML = "Answer: " + myEveryAnswer;
    console.log(myEveryAnswer);
  });

  //myReduce() FUNCTION BUTTON
  function myFunc(total, num) {
    return (total += num);
  }

  var myReduceButton = document.getElementById("myReduceButton");
  var myReduceRes = document.getElementById("myReduceResult");

  myReduceButton.addEventListener("click", () => {
    var myReduceArray = JSON.parse(
      document.getElementById("myReduceInput").value
    );
    var myReduceTarget = document.getElementById("myReduceTarget").value;
    let myReduceAnswer = myReduce(myReduceArray, myReduceTarget);
    myReduceRes.innerHTML = "Answer: " + myReduceAnswer;
    console.log(myReduceAnswer);
  });

  //myIncludes() FUNCTION BUTTON
  var myIncludesButton = document.getElementById("myIncludesButton");
  var myIncludesRes = document.getElementById("myIncludesResult");

  myIncludesButton.addEventListener("click", () => {
    var myIncludesArray = JSON.parse(
      document.getElementById("myIncludesInput").value
    );
    var myIncludesTarget = JSON.parse(
      document.getElementById("myIncludesTarget").value
    );
    let myIncludesAnswer = myIncludes(myIncludesArray, myIncludesTarget);
    myIncludesRes.innerHTML = "Answer: " + myIncludesAnswer;
    console.log(myIncludesAnswer);
  });

  // myIndexOf() button
  let myIndexOfButton = document.getElementById("myIndexOfButton");
  let myIndexOfResult = document.getElementById("myIndexOfResult");

  myIndexOfButton.addEventListener("click", () => {
    let myIndexOfArray = JSON.parse(
      document.getElementById("myIndexOfArray").value
    );
    let myIndexOfTarget = JSON.parse(
      document.getElementById("myIndexOfTarget").value
    );

    const res = myIndexOf(myIndexOfArray, myIndexOfTarget);
    console.log(myIndexOfArray);
    console.log(myIndexOfTarget);
    myIndexOfResult.innerHTML = res;
  });

  // myPushButton() button
  let myPushButton = document.getElementById("myPushButton");
  let myPushResult = document.getElementById("myPushResult");

  myPushButton.addEventListener("click", () => {
    let myPushArray = JSON.parse(document.getElementById("myPushArray").value);
    let myPushElement = JSON.parse(
      document.getElementById("myPushElement").value
    );

    myPush(myPushArray, myPushElement);

    console.log(myPushArray);
    myPushResult.innerHTML = myPushArray;
  });

  // myLastIndexOf() button
  let myLastIndexOfButton = document.getElementById("myLastIndexOfButton");
  let myLastIndexOfResult = document.getElementById("myLastIndexOfResult");

  myLastIndexOfButton.addEventListener("click", () => {
    let myLastIndexOfArray = JSON.parse(
      document.getElementById("myLastIndexOfArray").value
    );
    let myLastIndexOfTarget = JSON.parse(
      document.getElementById("myLastIndexOfTarget").value
    );

    const result = myLastIndexOf(myLastIndexOfArray, myLastIndexOfTarget);
    myLastIndexOfResult.innerHTML = result;
  });

  var grabKeysBtn = document.getElementById("grabKeysButton");
  var grabKeysRes = document.getElementById("grabKeysResults");

  grabKeysBtn.addEventListener("click", () => {
    var grabKeysObj = document.getElementById("grabKeysText").value;

    grabKeysObj = JSON.parse(grabKeysObj);

    console.log(grabKeysObj);

    grabKeysRes.innerHTML = grabKeys(grabKeysObj);
  });

  var grabValsBtn = document.getElementById("grabValuesButton");
  var grabValsRes = document.getElementById("grabValuesResults");

  grabValsBtn.addEventListener("click", () => {
    var grabValsObj = document.getElementById("grabValuesText").value;

    grabValsObj = JSON.parse(grabValsObj);

    console.log(grabValsObj);

    grabValsRes.innerHTML = grabValues(grabValsObj);
  });
};
