// P : What will the following program log to the console? Can you explain why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); //3 since the above line defines a property on the array which does not count towards length.
console.log(Object.keys(array).length); // keys is [0, 1, 2, 3.4] so length 4 (for the above reason)

array[-2] = 'Watermelon';
console.log(array.length); // Same as line 6 since you cannot use negative indices to assign from the end of an array in javascript
console.log(Object.keys(array).length); // keys is [0, 1, 2, 3.4, -2] so length 5
