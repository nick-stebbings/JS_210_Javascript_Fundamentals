/*
P:

    Equilateral: All three sides are of equal length.
    Isosceles: Two sides are of equal length, while the third is different.
    Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

E:

D:
  Input = three numbers
  Output = string

A:
   - return 'invalid' if lengths not > 0 OR if shortes two lengths don't add up to more than the third
   -
   -
   -
   -

   
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

*/
function triangle(...args) {
  let sortedSides = args.slice().sort((a, b) => a - b);
  let reverseSortedSides = args.slice().sort((a, b) => b - a);
  if (
    args.length != 3 ||
    args.some((length) => length <= 0) ||
    sortedSides[0] + sortedSides[1] < sortedSides[2]
  ) {
    return 'invalid';
  }
  switch (true) {
    case sortedSides[0] == reverseSortedSides[0]:
      return 'equilateral';
      break;
    case args[0] != args[1] && args[1] != args[2] && args[0] != args[2]:
      return 'scalene';
    default:
      return 'isoceles';
      break;
  }
}
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));
console.log(triangle(-1, 1, 1));
console.log(triangle(1, 1));
console.log(triangle(3, 1, 1));

console.log(triangle(1, 1, 1));
console.log(triangle(3, 3, 3));

console.log(triangle(3, 2, 3)); // "isosceles"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
