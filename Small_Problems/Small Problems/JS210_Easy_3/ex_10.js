/*
P:

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}


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
function wordSizes(str) {
  if (!str) {
    return {};
  }
  let words = str.split` `;
  let counts = words.map((word) => word.replace(/[^a-z]/gi, '').length);
  return counts.reduce((countObj, count) => {
    countObj.hasOwnProperty(count) ? countObj[count]++ : (countObj[count] = 1);
    return countObj;
  }, {});
}
