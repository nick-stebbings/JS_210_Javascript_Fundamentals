/*
P:
Write a function that takes a floating point number representing an angle between 0 and 360 degrees, and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Examples:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.

E:

D:
  Input = number
  Output = string

  A:
  - SET constants SECONDS IN MINUTE, MINUTES IN DEGREE as 60
   - SET minutes in degree as a constant of the two multiplied together
   - multiply the fraction from the number of degrees in argument by the new constant
   - this will give a floating point representation of the no. seconds in the remainder
   - divide by 60 to get 'minute' value
   - what's left is the ''value
   -
   */
function dms(degreeDecimal) {
  function operateAndZeroPad(num, divisor, operator, padLength = 2) {
    let operation = operator == '%' ? num % divisor : num / divisor;
    return ('00' + Math.floor(operation)).slice(-padLength);
  }
  const SECONDS_IN_MINUTE = 60;
  const MINUTES_IN_DEGREE = 60;
  const SECONDS_IN_DEGREE = SECONDS_IN_MINUTE * MINUTES_IN_DEGREE;

  let decimalRemainder = SECONDS_IN_DEGREE * (degreeDecimal % 1);
  return (
    `${operateAndZeroPad(degreeDecimal, 1, '/', 3)}°` +
    `${operateAndZeroPad(decimalRemainder, 60, '/')}'` +
    `${operateAndZeroPad(decimalRemainder, 60, '%')}`
  );
}

console.log(dms(254.6)); // 254°35'59"

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"
