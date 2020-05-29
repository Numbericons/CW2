function josephus(items, k) {
  let elim = [];
  let idx = k % items.length;
  while (items.length) {
    if (items.length === 1) idx = 1;
    elim.push(items.splice(idx-1,1)[0]);
    if (idx !== 0) idx -= 1;
    idx = (idx + k) % items.length;
  }
  return elim;
}

josephus([1,2,3,4,5,6,7], 3)
//need to return the order in which the solider were eliminated
//  use splice return value