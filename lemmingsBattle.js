function nextLemming(array) {
  if (!array.length) return false;
  let largest = 0;
  let idx = null;
  array.forEach((lemming, i) => {
    if (lemming > largest) {
      largest = lemming;
      idx = i;
    }
  });
  return [largest,i];
}

function lemmingBattle(battlefield, green, blue) {
  while (green.length && blue.length) {
    for (let i=0; i<battlefield; i++) {
      
    }
  }
}