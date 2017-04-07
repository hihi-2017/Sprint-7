
//problem 1
//Write a function min that takes two arguments and returns their minimum.

var min = function(a, b){
  return(a<=b)? a:b;
};

console.log(min)0,10);
//->0
console.log(min)0, -10);
//->-10


//problem 2
// Define a recursive function isEven corresponding to whether numbers are even or not. The function should accept a number parameter and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
//With the use of the Math.abs function, the negative value is

var isEven = function(number) {
  number= Math.abs(number);//convert to absolute value to take into account negative numbers
if (number === 0)
  return true;
  else if (number === 1)
  return false;
  else
    return isEven(number-2);
};


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


// problem 3
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

var countBs = function(string){
return string.match(/B/g).length;
};

// Write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
var countChar = function(str, character) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === character)
            count++;
    }
    return count;
};


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(countChar("kakkerlak", "l"));
// → 2
