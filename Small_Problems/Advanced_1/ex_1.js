/*
P:
Let's build another program using madlibs. We made a similar program in the Easy exercises, but this time the requirements are a bit different.

Build a madlibs program that takes a text template as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text template. Choose the right way to structure your template and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll be defining.

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

function madlibs(template) {
  // ...
}
// Examples:

// Note: The quotes in the example strings returned by the madlibs function are only shown for emphasis. These quotes are not present in the actual output strings. The words in quotes come from the list of texts and it is the madlibs function that puts them in.

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly


// madlibs(template1);
// // The "sleepy" brown "cat" "noisily"
// // "licks" the "sleepy" yellow
// // "dog", who "lazily" "licks" his
// // "tail" and looks around.

// madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

const template1 = `The "ADJ" brown "NOUN" "ADV"
"VERB" the "ADJ" yellow
"NOUN", who "ADV" "VERB" his
"NOUN" and looks around.`;
const template2 = `The "NOUN" "VERB" the "NOUN"'s "NOUN"`;

function madlibs(template) {
  const newWords = {
    NOUN: ['cheese', 'ball', 'hammer', 'monkey'],
    VERB: ['squashed', 'spun', 'chased', 'laughed at'],
    ADV: ['happily', 'slyly', 'readily', 'jovially'],
    ADJ: ['squirly', 'slow', 'rampant', 'lowly'],
  };
  for(let wordType in newWords) {
    let reg = new RegExp(wordType, 'g')
    let matches = template.match(reg);
    if (!matches) continue;
    for (let matchIndex = 0; matchIndex < matches.length; matchIndex ++) {
      let randomIndex = Math.floor(Math.random() * newWords[wordType].length)
      template = template.replace(wordType, newWords[wordType][randomIndex]);
    }
  }
  return template.replace(new RegExp('"', 'g'), '');
}
console.log(madlibs(template1));
console.log(madlibs(template2));