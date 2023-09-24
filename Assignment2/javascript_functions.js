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
