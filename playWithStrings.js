function swapCases(char, string) {
  let retStr = "";
  for (let z=0;z<string.length;z++) {
    if (string[z].toLowerCase() === char.toLowerCase()) {
      retStr += string[z] === string[z].toLowerCase() ?  string[z].toUpperCase() : string[z].toLowerCase();
    } else {
      retStr += string[z];
    }
  }
  return retStr;
}

function workOnStrings(a, b) {
  for (let z=0; z<a.length;z++) { b = swapCases(a[z], b) }
  for (let o=0; o<b.length;o++) { a = swapCases(b[o], a) }
  return a + b;
}

// workOnStrings("abc", "cde");
workOnStrings("abab", "bababa");


// helper to do individual swaps of the given character within the target strings a or b
//loop through a and then b
//  for each char, pass that char plus the opposite string (b or a) into helper
//  return the strings added together