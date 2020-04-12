//setup output string, which will be the result of converting char into input code
//variable to track current case
//var digits = '0123456789', adds - after the digit to add back to message (hold)

//iterate across the message
//check current case vs. case of char, if different add # and flip current case boolean  
//helper function that takes to characters
//it returns if the characters are in the same grouping, in which case a space will be added
//if current case is upper, convert return value from helper

//0- for holding to get a

const retValGroup = (charVal,charComp) => {
  if (charVal === '#') return ['#', false];
  const groups = [".,?!", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz", "'-+=" ];
  let bool = false;
  let value = "";
  
  for (let group of groups) {
    if (group.includes(charVal)) {
      if (group.includes(charComp)) bool = true;
      const idx = group.indexOf(charVal);
      const keyNum = groups.indexOf(group) + 1;

      for (let i=0;i<idx+1;i++) { 
        if (keyNum === groups.length) {
          value += "*"
        } else {
          value += keyNum.toString(); 
        }
      }
      break;
    }
  }
  return [value, bool];
}

const addAlpha = (char, lowCase) => {
  if (char === char.toUpperCase() && lowCase) {
    return [true, false];
  } else if (char === char.toLowerCase() && !lowCase) {
    return [true, true];
  } else {
    return [false, lowCase];
  }
}

const sendMessage = message => {
  const digits = '123456789'
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let lowCase = true;
  let keys = "";

  for (let i=0; i<message.length;i++) {
    const char = message[i];
    const loChar = char.toLowerCase();

    if (digits.includes(char) || char === "#" || char === "*") {
      keys += char + "-";
    } else if (char === " ") {
      if (message[i-1] === " ") keys += " ";
      keys += "0";
    } else {
      if (alpha.includes(loChar)) {
        const boolArr = addAlpha(char,lowCase);
        if (boolArr[0]) keys += "#";
        lowCase = boolArr[1];
      }
      let valGroup = retValGroup(loChar, message[i-1]);
      if (valGroup[1]) keys += " ";
      keys += lowCase ? valGroup[0] : valGroup[0].toUpperCase();
    }
  }

  message = keys;
  return message;
}

// const result = sendMessage("hey");
// console.log('Expect: 4433999');
// console.log(`Actual: ${result}`);

// const result2 = sendMessage("one two three");
// console.log('Expect: 666 6633089666084477733 33');
// console.log(`Actual: ${result2}`);

// const result3 = sendMessage("Hello World!");
// console.log('Expect: #44#33555 5556660#9#66677755531111');
// console.log(`Actual: ${result3}`);

// const result4 = sendMessage("A-z");
// console.log('Expect: #2**#9999');
// console.log(`Actual: ${result4}`);

const result4 = sendMessage("what's up m8?");
console.log('Expect: 94428*77770887068-111');
                     //9442877770887068-111
console.log(`Actual: ${result4}`);

const result5 = sendMessage("D=b*b-4*a*c");
console.log('Expect: #3****#22*-22**4-*-2*-222');
                   //#3****#22  22**4-  2  222
console.log(`Actual: ${result5}`);


Testing an equation: message - D=b*b-4*a*c
expected '#3****#2222**4-2222' to equal '#3****#22*-22**4-*-2*-222'