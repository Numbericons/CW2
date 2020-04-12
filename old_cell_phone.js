//setup output string, which will be the result of converting char into input code
//variable to track current case
//var digits = '0123456789', adds - after the digit to add back to message (hold)
//iterate across the message
//helper function that takes to characters
//it returns if the characters are in the same grouping, in which case a space will be added

const sameGroup = (char1,char2) => {
  const groups = [".,?!", "abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwxz", "\-+="]
  let bool = false;
  
  groups.forEach(group => {
    if (group.includes(char1) && group.includes(char2)) bool = true;
  })

  return bool;
}

const sendMessage = message => {
  let lowCase = true;
  let keys = "";

  

  message = keys;
  return message;
}