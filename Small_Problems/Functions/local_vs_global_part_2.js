var myVar = "This is global";

function someFunction() {
  var myVar = "This is local";
  console.log(myVar);
}

someFunction();

// The code will log 'This is local' as the inner variable initialised on line 4 is ins scope, and again shadowing the global variable initialised on line 1.