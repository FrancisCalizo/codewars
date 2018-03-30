// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str){
  let result = "";
  // Split str into array of words split by space
  let arr =  str.split(" ");
  // Iterate through array & Conditional to see if word in string is >= 5 char 
  let newArr = arr.map((word) =>{
    // Reverse Word if >=5 char
    if(word.length > 4){
      let reverseWord = '';
      for(i = word.length - 1; i >= 0; i--){
        reverseWord += word[i];
      } 
      return reverseWord;
    } else {
      return word;
    }
  });
  // Will join the elements of the array with a space between
  return newArr.join(" ")
}