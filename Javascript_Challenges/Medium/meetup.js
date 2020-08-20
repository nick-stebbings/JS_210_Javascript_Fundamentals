
/*
P:
 - Given 4 inputs that together represent a specific date, calculate and return which specific day of the year is when a meetup will take place.
 - One of the inputs will be a descriptor that qualifies which of the possible dates is meant to be used for the meetup. The rules for the descriptor meaning are:
 /*The descriptors you are expected to parse are: first, second, third, fourth, fifth, last, monteenth, tuesteenth, wednesteenth, thursteenth, friteenth, saturteenth, sunteenth
 
  -- first - the first of the month
  -- second  etc
  -- third etc
  -- fourth etc
  
  -- montheenth  (mondayteenth)
  -- tuesteenth
  -- etc. These refer to the single day in a month which falls in the range (13-19) of dates and has the day name starting with the part of the descriptor before 'teenth'
  e.g. Fri-teenth would be Friday the 13th (on a month where that's where it fell)
  
E:

D:
  Input = 3 parts of a date (two numeric, one string) and a qualifier (string)
    Year, Month, Day of Week, Qualifier (first, last, teenth, etc)
  Output = Date object

A:
   - Find all instances of a specified day within a given month
     - Find first, second, third, fourth, etc.
   - Find the teenth day of the specified month

Pseudo Code: Find all Instances of a Specified Day Within a Given Month
  Find the first instance of the day of the month

  looking for Saturday
  
  (1st of the month is a Monday)
  firstDay = getDay of the first of the month
  firstDay == 1  == Monday (according to day dictionary)
    Yes: dayDictionary[1] => Monday
  
  diff = dayDictionary.getIndexOf('Saturday') - (getDay of the 1st of the month)
  ==> 5
  first instance of Saturday = (getDay of first + diff)
  
  Find the day of the week for the first day of month
  
*/

function meetupDay(year, month, dayName, descriptor) {
  const dayDictionary = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const descriptorIndices = { '1st': 0, 
                              '2nd': 1,
                              '3rd': 2,
                              '4th': 3,
                              '5th': 4,
                               last:-1, 
                              }
  function getFirstDayInstance() {
    let firstDayOfMonth = new Date(year, month, 1);
    let indexOfFirstDay = firstDayOfMonth.getDay();
    let dayIndexDifference = dayDictionary.indexOf(dayName) - indexOfFirstDay;
    dayIndexDifference = (7 + dayIndexDifference) % 7;
    return new Date(year, month, 1 + dayIndexDifference % 7);
  }
  function isTeen(date) {
    return (date >= 13 && date <= 19);
  }
  
  let dayInstances = [];
  let firstInstanceDate = getFirstDayInstance().getDate();
  
  for(firstInstanceDate; new Date(year, month, firstInstanceDate).getMonth() == month; firstInstanceDate += 7 ) {
    dayInstances.push(firstInstanceDate);
  }
  let targetDate = (descriptor.includes('teenth') ? dayInstances.find(isTeen) : dayInstances.splice(descriptorIndices[descriptor], 1)[0]);
  return new Date(year, month, targetDate)
}

console.log(meetupDay(2013, 4, 'Monday', 'teenth').getDate()) /*==  new Date(2013, 4, 13)*/;
console.log(meetupDay(2013, 1, 'Saturday', 'teenth').getDate())/* ==  new Date(2013, 1, 16))*/;
console.log(meetupDay(2013, 4, 'Tuesday', '1st').getDate())/* ==  new Date(2013, 4, 7))*/;
console.log(meetupDay(2013, 3, 'Monday', '2nd').getDate())/* ==  new Date(2013, 3, 8))*/;
console.log(meetupDay(2013, 8, 'Thursday', '3rd').getDate())/* ==  new Date(2013, 8, 19))*/;
console.log(meetupDay(2013, 2, 'Sunday', '4th').getDate())/* ==  new Date(2013, 2, 24))*/;
console.log(meetupDay(2013, 9, 'Thursday', 'last').getDate())/* ==  new Date(2013, 9, 31))*/;
console.log(meetupDay(2012, 1, 'Wednesday', 'last').getDate())/* ==  new Date(2012, 1, 29))*/;
console.log(meetupDay(2014, 11, 'Wednesday', 'last').getDate())/* ==  new Date(2014, 11, 31))*/;
console.log(meetupDay(2015, 1, 'Sunday', 'last').getDate())/* ==  new Date(2015, 1, 22))*/;
console.log(meetupDay(2012, 11, 'Friday', '1st').getDate())/* ==  new Date(2012, 11, 7))*/;
console.log(meetupDay(2015, 2, 'Monday', '5th').getDate())/* ==  new Date(2015, 2, 30))*/;