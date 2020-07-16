/*
P:

Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].


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

function sixNumbs() {
  const rlSync = require('readline-sync');
  let answersArray = [];

  for (let index = 0; index < 6; index++) {
    const element = 6;
    let answer = rlSync.question(`Please enter number ${index + 1}:\n`);
    answersArray.push(answer);
  }
  let firstFive = answersArray.slice(0, 5);
  let lastAnswer = answersArray.slice(-1);
  let firstFiveIncludeSixth = firstFive.includes(lastAnswer);
  let resultString = firstFiveIncludeSixth ? 'does' : 'does not';
  console.log(`The number ${lastAnswer} ${resultString} appear in ${firstFive}.`);
}
