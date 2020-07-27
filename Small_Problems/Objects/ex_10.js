/*
P:


As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

The two functions below do the reverse of the previous exercise. They take a 24-hour time argument and return the number of minutes before or after midnight, respectively. Both functions should return a value between 0 and 1439 (inclusive). Refactor the functions using the Date object.

Examples:

afterMidnight('00:00');       // 0
beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
beforeMidnight('12:34');      // 686

Note: Disregard Daylight Saving Time, Standard Time, and other irregularities.

*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const MS_PER_MINUTE = 60 * 1000;

function afterMidnight(timeStr) {
  const timeComponents = timeStr.split(':');
  const hours = parseInt(timeComponents[0], 10);
  const minutes = parseInt(timeComponents[1], 10);
  let baseDate = new Date(2010, 0, 1);
  let alteredDate = new Date(2010, 0, 1);

  alteredDate.setHours(hours);
  let msDifference = alteredDate.setMinutes(minutes) - baseDate.getTime();
  return msDifference / MS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}
console.log(afterMidnight('00:00')); // 0
console.log(beforeMidnight('00:00')); // 0
console.log(afterMidnight('12:34')); // 754
console.log(beforeMidnight('12:34')); // 686
