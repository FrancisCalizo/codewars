// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
  var str = "";
  
  for(i = 1; i <= n; i++){
    str += s;
  } return str;
}