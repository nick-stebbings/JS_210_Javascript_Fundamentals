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

/*Prime algo 
- SET a var for the sqroot of the num
- ITERATE up until sqroot
- RETURN FALSE if the num divides into your primeCandidate
- RETURN TRUE at the end

*/

function isPrime(num) {
  if (num <= 2) return false;
  let root = Math.sqrt(num)
  for (let index = 3; index < root; index += 2) {
      if (num % index == 0) return false;
  }
  return true;
}

function checkGoldbach(num) {
  if (num < 4 || num % 2 != 0) return null;
  for (let i = 3; i < num / 2; i += 2) {
    if (isPrime(i)) {
      if (isPrime(num - i)) {
        console.log(i, num - i);
      }
    }
  }
}
console.log(checkGoldbach(3)); 
console.log(checkGoldbach(4)); 
checkGoldbach(12);
checkGoldbach(100);