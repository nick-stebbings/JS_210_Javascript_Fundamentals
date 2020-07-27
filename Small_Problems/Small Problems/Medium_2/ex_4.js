/*
P:
Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

Examples:

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

E:

D:
  Input =
  Output =

A:
- iterate through the months
- set a new date object with that year and month
   - if the date object with date of the 13th has 5 as getDay
   - then increment counter
   - return counter
   -
*/
function fridayThe13ths(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    const months13th = new Date(year, month, 13);
    if (months13th.getDay() === 5) {
      count++;
    }
  }
  return count;
}

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
