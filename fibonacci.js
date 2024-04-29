function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  function printFibonacciSequence(n) {
    console.log("Fibonacci Sequence:");
  
    for (let i = 0; i < n; i++) {
      console.log(fibonacci(i));
    }
  }
  
  // Change the value of 'n' to print a different number of Fibonacci numbers
  const n = 4; // Change this to the desired number of Fibonacci numbers
  printFibonacciSequence(n);
  