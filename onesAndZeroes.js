function moreZeros(s) {
  return s.split('').filter((char, idx, self) => {
    if (self.indexOf(char) !== idx) return false;
    const zeroes = char.charCodeAt(0).toString(2).match(/0/g);
    const ones = char.charCodeAt(0).toString(2).match(/1/g);
    if (!zeroes || !ones) return false;
    return zeroes.length - ones.length > 0;
  })
}

const result = moreZeros('abcde');
console.log(result);