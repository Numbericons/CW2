var encryptThis = function (text) {
  let arr = text.split(' ');

  arr = arr.map(str => {
    if (str.length < 3) return str.charCodeAt(0) + (str[1] ? str[1] : "");
    return str.charCodeAt(0) + str[str.length - 1] + str.slice(2, str.length - 1) + str[1]
  });
  return arr.join(' ');
}

//split text on spaces and return space seperated words
//use map or iterate through array created by split
//replace first char with ascii code and swap 2nd and last letters

// .charCodeAt(0);