// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(number){
  // Define a variable to Store the final number 
  let result = '',
  // Change Argument of Integer into Str
  num = String(number);
  // Iterate through the argument 
  for(let i = 0; i < num.length; i ++){
    // Square the character of the current index
    // Append the result to the defined variable above
    result += Math.pow(num[i], 2);
  }
  // Return the Integer (Might have to parse the str to int) 
  return parseInt(result); 
}