/*
P:

The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

Examples:

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74


E:

D:
  Input =
  Output =

A:
   -
   -
   -
   -
   -
   -
*/

function fibRecurse(num) {
  if (num < 2) {
    return 1;
  } else {
    return fibRecurse(num - 1) + fibRecurse(num - 2);
  }
}

function memoiser(fun) {
  return {
    cache: {},
    memoisedFunction(n) {
      if (this.cache[n] != undefined) {
        return this.cache[n];
      } else {
        let result = fun(n);
        this.cache[n] = result;
        return result;
      }
    },
  };
}

let memoisedFibRecurse = memoiser(fibRecurse);
// Algorithm:
// SET a fibTracker variable
// Iterate through using a normal loop
// Stop and return index of last cached fib number WHEN the length is no longer < than n

function findFibonacciIndexByLength(n) {
  //You would need to also make this recursive to see any gains from memoisation.
  // Algo:
  // BASE condition, n = 1, then return 1
  // IF a fib with length n exists in the fibRecurse memo, return the first of its type,
  // ELSE try with length n + 1

  let fibTracker = memoiser(fibRecurse);
  let fibIndex = 1;
  fibTracker.memoisedFunction(fibIndex);

  for (
    ;
    fibTracker.cache[fibIndex].toString().length < n;
    fibTracker.memoisedFunction(++fibIndex)
  ) {
    continue;
  }
  return fibIndex + 1;
}

// console.log(findFibonacciIndexByLength(2));
// console.log(findFibonacciIndexByLength(10));
// console.log(findFibonacciIndexByLength(16));
let memoisedMemoisedFib = memoiser(findFibonacciIndexByLength);

console.log(memoisedMemoisedFib.memoisedFunction(2)); // 7
console.log(memoisedMemoisedFib.memoisedFunction(10)); // 45
console.log(memoisedMemoisedFib.memoisedFunction(16)); // 74
