//setup output string, which will be the result of converting char into input code
//variable to track current case
//var digits = '0123456789', adds - after the digit to add back to message (hold)

//iterate across the message
//check current case vs. case of char, if different add # and flip current case boolean  
//helper function that takes to characters
//it returns if the characters are in the same grouping, in which case a space will be added
//if current case is upper, convert return value from helper

const retValGroup = (charVal,charComp) => {
  const groups = [".,?!", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz", "\-+="];
  let bool = false;
  let value = "";
  
  // for (let group of groups) {
  for (let group of groups) {
    if (group.includes(charVal)) {
      if (group.includes(charComp)) bool = true;

      const idx = group.indexOf(charVal);
      const keyNum = groups.indexOf(group) + 1;

      for (let i=0;i<idx+1;i++) { 
        value += keyNum.toString(); 
      }

      break;
    }
  }

  return [value, bool];
}


const sendMessage = message => {
  const digits = '123456789'
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let lowCase = true;
  let keys = "";

  for (let i=0; i<message.length;i++) {
    const char = message[i];
    const loChar = char.toLowerCase();

    if (digits.includes(char)) {
      keys += char + '-';
    } else if (char === ' ') {
       keys += '0';
    } else {
      if ((char === char.toUpperCase()) && lowCase) {
        lowCase = false;
        if (alpha.includes(loChar)) keys += "#";
      } else if ((char === loChar) && !lowCase) {
        lowCase = true;
        if (alpha.includes(loChar)) keys += "#";
      }
      let valGroup = retValGroup(loChar, message[i-1]);
      if (valGroup[1]) keys += " ";
      keys += lowCase ? valGroup[0] : valGroup[0].toUpperCase();
    }
  }

  message = keys;
  return message;
}


const result = sendMessage("hey");
console.log('Expect: 4433999');
console.log(`Actual: ${result}`);

const result2 = sendMessage("one two three");
console.log('Expect: 666 6633089666084477733 33');
console.log(`Actual: ${result2}`);

const result3 = sendMessage("Hello World!");
console.log('Expect: #44#33555 5556660#9#66677755531111');
console.log(`Actual: ${result3}`);
// ["Hello World!", "#44#33555 5556660#9#66677755531111"],
// ["Def Con 1!", "#3#33 3330#222#666 6601-1111"],
// ["A-z", "#2**#9999"],
// ["1984", "1-9-8-4-"],
// ["Big thanks for checking out my kata", "#22#444 4084426655777703336667770222443322255444664066688 806999055282"]