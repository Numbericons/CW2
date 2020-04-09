function hydrate(s) {
  const sArr = s.split(', ');
  let count = 0;
  let last = sArr[sArr.length - 1];
  const idxAnd = last.indexOf('and');

  if (idxAnd !== -1) {
    sArr.push(last.slice(idxAnd+4))
    sArr[sArr.length - 2] = last.slice(0,idxAnd-1);
  }

  sArr.forEach(str => {
    str = str.slice(0, str.indexOf(' '));
    count += parseInt(str)
  })

  const retStr = (count === 1) ? 'glass' : 'glasses';
  return `${count} ${retStr} of water`;
}

// const result = hydrate("1 beer");
const result = hydrate("2 glasses of wine and 1 shot")
// const result = hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer")

console.log(result);