/*
P:

E:

D:
  Input = two numbers
  Output = number

A:
   - Using euclid's algorithm, divide the remainder into the quotient until you get 0
       \gcd(a,0)=a
    gcd ( a , b ) = gcd ( b , a m o d b ) 
   -
   -
   -
   -
   -
*/

function gcd(num1, num2) {
  [num1, num2] = [num1, num2].sort( (a, b) => a-b )
  if (num2 % num1 ==  0) return num1;
  return gcd(num1, num2 % num1);
}
console.log(gcd(12,9));

function multiGcd(...args) {
  let currentGcd = args.pop();
  while (args.length > 0) {
    currentGcd = gcd(currentGcd, args.shift());
  }
  return currentGcd;
}
console.log(multiGcd(3,6,12,35));


