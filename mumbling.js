// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt

function accum(str) {
  let result = "";

  str.split("").forEach((letter, idx) => {
    let currentString = "";

    for (let i = 1; i <= idx + 1; i++) {
      currentString += letter.toLowerCase();
    }

    currentString =
      currentString.charAt(0).toUpperCase() + currentString.slice(1);
    idx == 0 ? (result += currentString) : (result += "-" + currentString);
  });

  return result;
}

// Cool Solution Below
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
