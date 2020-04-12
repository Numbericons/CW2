// count variable to return highest count
// currCount variable to track current substrings value
// iterate across string
// if the char is a vowel, reset currCount
// if the char is !vowel, 
// add current char val to currCount and check if it is > count, if so, count becomes equal to the val



function solve(s) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const vowels = 'aeiou';
  let count = 0;
  let currCount = 0;

  for (let i=0;i<s.length;i++){
    if (vowels.includes(s[i])) {
      currCount = 0;
    } else {
      currCount += alpha.indexOf(s[i]) + 1;
      if (currCount > count) count = currCount;
    }
  }

  return count;
};