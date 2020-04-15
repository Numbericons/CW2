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
  return idx;
}

function lemmingBattle(battlefield, green, blue) {
  while (green.length && blue.length) {
    for (let i=0; i<battlefield; i++) {
      let greenie = green.splice(nextLemming(green),1)[0];
      let blueie = blue.splice(nextLemming(blue),1)[0];
      if (greenie > blueie) {
        green.push(greenie - blueie);
      } else if (blueie > greenie) {
        blue.push(blueie - greenie);
      }
    }
  }
  if (!green.length && !blue.length) return 'Green and Blue died';
  let msg = (green.length) ? "Green wins:" : "Blue wins:";
  let winner = (green.length) ? green : blue;
  winner.forEach(lemming=> msg += ` ${lemming}`)
  return msg;
}

//helper determines next greatest lemming for an array of lemmings and returns the power and index
//while either of the lemming groups have members
// for the number of battlefields, add a lemming to the battlefield
// pull them out of their respective arrays w/ splice
// resolve if one or both die and diminishing power for surviving lemmings before adding back
 