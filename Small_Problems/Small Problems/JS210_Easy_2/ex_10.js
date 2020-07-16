/*
P:

Write a function that takes a year as input and returns the century.
 - The return value should be a string that begins with the century number, 
  - and ends with 'st', 'nd', 'rd', or 'th'
   - as appropriate for that number.

Rules: New centuries begin in years that end with 01. 
So, the years 1901 - 2000 comprise the 20th century.

Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"


E:

D:
  Input = num
  Output = str

A:
   - Calculate the correct century number:
    - IF the year <= 100, 1st
    - IF the year >100, <= 200, 2nd
    -  ...
    - ceiling(year / 100)

   - append the correct appendage to the century number
   - CASE when ends in 1, 'st'
     - when ends in 0, 'th' (or 11 - 13)
     - when ends in 2, 'nd'
     - when ends in 3, 'rd'
*/
function century(year) {
  let centuryNum = Math.ceil(year / 100).toString(10);
  let appendage;

  switch (true) {
    case !centuryNum.endsWith('11') && centuryNum.endsWith('1'):
      appendage = 'st';
      break;
    case !centuryNum.endsWith('12') && centuryNum.endsWith('2'):
      appendage = 'nd';
      break;
    case !centuryNum.endsWith('13') && centuryNum.endsWith('3'):
      appendage = 'rd';
      break;
    default:
      appendage = 'th';
      break;
  }
  return centuryNum + appendage;
}
