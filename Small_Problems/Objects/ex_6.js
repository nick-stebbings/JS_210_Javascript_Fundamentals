// Answer:

const myArray = [5, 5];
myArray[-1] = 5; // Defining properties on the object with property names -1 and -2 respectively
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    // The new properties defined on lines 4 and 5 do not contribute to length
    sum += array[i]; // 20
  }

  return sum / array.length; // 10
}

console.log(average(myArray));
