function fib(n) {
  switch (n) {
    case 1:
      return 1;
      break;
    case 2:
      return 1;
      break;
    default:
      return fib(n - 1) + fib(n - 2);
      break;
  }
}

console.log(fib(20));
