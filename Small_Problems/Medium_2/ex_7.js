// P: Read through the code below and determine what will be logged. You may refer to the ASCII Table to look up character code values.

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne(); // This gets executed first
  anotherOne(116, 104, 101); // Then this
  // anotherOne(77, 97, 116, 114, 105, 120, 33); // Then this, which happens on line 28 after function outer returns.
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

// welcome
// to
// the
// matrix!
