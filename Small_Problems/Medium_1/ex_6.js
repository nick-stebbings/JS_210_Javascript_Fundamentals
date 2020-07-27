// Read through the following code. Why will it log 'debugging'?
function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();
// Yes. The inner functon encloses the status variable.
