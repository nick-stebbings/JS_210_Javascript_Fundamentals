// The penultimate function takes a string as an argument and returns the next-to-last word in the string. The function assumes that "words" are any sequence of non-whitespace characters. The function also assumes that the input string will always contain at least two words. The penultimate function in the example below does not return the expected result. Run the code below, check the current result, identify the problem, explain what the problem is, and provide a working solution.

// Examples:

function penultimate(string) {
  return string.split(' ')[-2]; // undefined
}

function penultimate1(string) {
  let wordsArray = string.split(' ');
  return wordsArray[wordsArray.length - 2]; // the penultimate element
}

// Answer: You cannot reference from the end of an array using negative indices. You can instead use (array.length - 1) to refer to the last element and -1 again to get the result.

console.log(penultimate('last word')); // expected: "last"
console.log(penultimate1('last word')); // expected: "last"
console.log(penultimate('Launch School is great!')); // expected: "is"
console.log(penultimate1('Launch School is great!')); // expected: "is"
