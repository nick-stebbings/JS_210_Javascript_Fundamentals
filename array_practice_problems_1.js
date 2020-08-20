/*
P:
Write a function named unshift that accepts two arguments: an Array and a value. The function should insert the value at the beginning of the Array, and return the new length of the array. You will need a for loop for this problem.

E:

D:
  Input =
  Output =
  
  A:
   -
   -
   -
   */
  
function unshift(arr, el) {
  arr.length = arr.length + 1;
  let nextEl;
  let currentEl = arr[0]; 
  
  for (let i = 0; i < arr.length - 1; i++) {
    nextEl = arr[i + 1];
    arr[i+1] = currentEl;
    currentEl = nextEl;
  }
  arr[0] = el;
  return arr.length;
}

function shift(arr) {
  //    - we need to alter the length property, as before, but only once the first element has been removed
  //  - method is mutating hence we need to iterate through and reassign elements to the index before them
  //  - skip the first element
  let firstElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length = arr.length - 1;
  return firstElement;
}
   
let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

// let count = [1, 2, 3];
// console.log(shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]