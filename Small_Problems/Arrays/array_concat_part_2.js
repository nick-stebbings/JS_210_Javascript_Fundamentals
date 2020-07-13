// In this exercise, you will learn more about Arrays by implementing your own version of the Array.prototype.concat method. Write a function that returns a new array composed of all values from the first array argument and the second array or value argument. Take note of the following specifications when writing your concat function.

//     The first argument will always be an array.
//     The second argument can be either an array or another value.
//     The function should return a new array.
//     The elements in the new array should be in the same order as they appear in the arguments.
//     The function should copy any object references from the arguments into the new array — i.e., if you make a change to a reference object from one of the arguments after calling concat, those changes should show up in the output array as well.
//     The function should copy the values of primitives (e.g., strings, numbers, and booleans).

// Examples:

function concat(array1, ...secondArgument) {
  let newArr = array1.slice(0);
  secondArgument.forEach(element => {
    
  switch (typeof element) {
    case "object":
      for (let prop in element) {
        newArr.push(element[prop]);
      }
      break;
      default:
        newArr.push(element);
      }
  });
      return newArr;
}
console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]

