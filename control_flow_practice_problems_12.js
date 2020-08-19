/*
P:
Write a function named checkGoldbach that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer expectedSum, and logs all combinations of two prime numbers whose sum is expectedSum. Log the prime pairs with the smaller number first. If expectedSum is odd or less than 4, your function should log null.

Your checkGoldbach function may call the isPrime function you wrote for a previous practice problem.
Example

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

E:

D:
  Input =
  Output =

A:
   - Iterate through the odd numbers between 3 and num, i
   - If the i is prime, THEN check if num - i is also prime
   - If they both are, log them
   - Else continue without logging
   -
   -
*/

function isPrime(num) {
  for (let index = 3; index < num; index++) {
    for (let j = 3 ; j < index; j++) {
      let root = Math.sqrt()
      return   
    }
    
  }
}
function checkGoldbach(num) {
  if (num <= 4 || num % 2 != 0) return null;
}