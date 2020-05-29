function josephus(items, k) {
  let elim = [];
  while (items.length) {
    elim.push(items.splice(k % items.length,1));
  }
  return elim;
}

//need to return the order in which the solider were eliminated
//  use splice return value