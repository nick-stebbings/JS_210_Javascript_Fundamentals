var myVar = "This is global";

function someFunction() {
  var myVar = "This is local";
}

someFunction();
console.log(myVar);

// The code will log 'This is global' as the inner variable initialised on line 4 is shadowing the outer variable with the same name initialised on line 1, so no reassignement takes place within the function body.