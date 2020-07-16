/*
P:
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

E:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

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
function retirement() {
  const rlSync = require('readline-sync');
  let answer1 = rlSync.question('What is your age?\n');
  let answer2 = rlSync.question('At what age would you like to retire?\n');
  let yearsLeft = Number(answer2) - Number(answer1);
  console.log(`It's 2020. You will retire in ${2020 + yearsLeft}.`);
  console.log(`You have only ${yearsLeft} years of work to go!`);
}
