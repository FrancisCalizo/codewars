// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(strNum){
  // Change string to Array of Nums
  let numbers = strNum.split(' ')
      // Map the Arr of Strings to an Array of Numbers
      .map(Number),
      // Define the Min and Max Nums
      min = numbers[0], 
      max = numbers[0];
  
  // Loop throught the string
  for(let i = 1; i < numbers.length; i++){
    // Condition to figure out which is Min
    if(min > numbers[i]){
      min = numbers[i];
    }
    // Condition to figure out which is Max
    if(max < numbers[i]){
      max = numbers [i];
    }    
  }
  // Return a space separated String with Max first, Min second
  return `${max} ${min}`
}