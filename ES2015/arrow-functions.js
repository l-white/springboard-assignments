/*
ES2015 Arrow Functions Shorthand
Refactor the above code to use two arrow functions. Turn it into a one-liner.

function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}*/

const double = arr => arr.map(x => x * 2);


/* Write an ES2015 Version 
Refactor the following function to use arrow functions:
Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}*/

const squareAndFindEvens = numbers => {
  const squares = numbers.map(num => num ** 2);
  return squares.filter(square => square % 2 === 0);
}


