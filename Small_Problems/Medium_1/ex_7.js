// P
// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// ANswer: because the nested function call on line 10 means the execution moves to line 7 where the const variable is in scope (it is one level up the function scope chain.)
