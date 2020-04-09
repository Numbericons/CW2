function hydrate(s) {
  let count = 0;
  const sArr = s.split(',');
  const last = sArr[sArr.length - 1];
  const idxAnd = last.indexOf('and');

  if (idxAnd !== -1) {
    sArr.push(last.slice(idxAnd+3))
    last = last.slice(0,idxAnd);
  }

  sArr.forEach(str => {
    str = str.slice(0, str.indexOf(' '));
    count += parseInt(str)
  })

  const retStr = (count === 1) ? 'glass' : 'glasses';
  return `${count} ${retStr} of water`;
}

hydrate("1 beer");