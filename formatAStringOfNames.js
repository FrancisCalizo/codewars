// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names,
// which should be separated by an ampersand.

function list(names) {
  let arr = names.map(obj => obj.name);
  let str = "";

  if (arr.length === 0) return str;

  if (arr.length === 1) return arr[0];

  arr.forEach((name, idx) => {
    switch (true) {
      case idx === 0:
        str = name;
        break;
      case idx > 0 && idx < arr.length - 1:
        str += `, ${name}`;
        break;
      default:
        str += ` & ${name}`;
        break;
    }
  });

  return str;
}

// Cool Solution using array reduce
function list(names) {
  return names.reduce(function(prev, current, index, array) {
    if (index === 0) {
      return current.name;
    } else if (index === array.length - 1) {
      return prev + " & " + current.name;
    } else {
      return prev + ", " + current.name;
    }
  }, "");
}
