

const fibonacci =function fib(n) {

    if(n<0){
      return "OOPS";
    }
    n = Number(n);

  return ( n <= 1 && n>= 0 )? n : fib(n - 1) + fib(n - 2);
}

    


// Do not edit below this line
module.exports = fibonacci;
