/*
P:
Write a function that takes a string consisting of one or more space separated words, and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

E:

D:
  Input =
  Output =

A:
   - split on space
   - map each word to its length
   - set a results object
   - reduce the mapped array
   - if the property is in the object (hasOwnProp)
   - then increment its value
   - else return the object with a new property, value 1
*/

function wordSizes(str) {
  let words = str.split` `;
  let counts = words.map((word) => word.length);
  return counts.reduce((countObj, count) => {
    countObj.hasOwnProperty(count) ? countObj[count]++ : (countObj[count] = 1);
    return countObj;
  }, {});
}
