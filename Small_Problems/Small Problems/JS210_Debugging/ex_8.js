/*
P:

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Rules: 
- Tested values are all between 0 and 100.
- There is no need to check for negative values or values greater than 100.

Examples:

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"


E:

D:
  Input =
  Output =

A:
   - calculate the mean, set it to a variable
   - use a switch statement to compare 
   - return grade from the function when the correct branch has been executed
*/

function getGrade(...args) {
  let meanScore = args.reduce((sum, el) => sum + el) / args.length;
  switch (true) {
    case 90 <= meanScore && meanScore <= 100:
      return 'A';
    case 80 <= meanScore && meanScore < 90:
      return 'B';
    case 70 <= meanScore && meanScore < 80:
      return 'C';
    case 60 <= meanScore && meanScore < 70:
      return 'D';
    case 0 <= meanScore && meanScore < 60:
      return 'F';
  }
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
console.log(getGrade(10, 20, 45)); // "F"
console.log(getGrade(40, 50, 40)); // "F"
