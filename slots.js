function fruit(reels, spins) {
  let cntReels = {};
  let scoreTbl = {
    'Wild': 10, 'Star': 9,'Bell': 8,'Shell': 7,'Seven': 6,
    'Cherry': 5,'Bar': 4,'King': 3,'Queen': 2,'Jack': 1
  }
  spins.forEach((spin,i) => {
    let spinVal = reels[i][spin];
    cntReels[spinVal] = cntReels[spinVal] ? cntReels[spinVal] + 1 : 1;
  })
  const keys = Object.keys(cntReels);
  for (let z = 0; z < keys.length;z++) {
    const keyVal = scoreTbl[keys[z]];
    if (cntReels[keys[z]] === 3) return keyVal * 10;
    if (cntReels[keys[z]] === 2) {
      if (cntReels['Wild'] === 1) return keyVal * 2;
      return keyVal;
    }
  }
  return 0;
}

//receive array of reels, spins is an array of indices where each reel has landed
//each of the 3 reels can have different values/symbols
//'spins can be different' - just different values?
//count obj with num of each reel hit;

//create score table - object with value/symbol key and the value as base value (a pair)
//if pair + third reel is 'Wild', score is * 2
//if trips, score is * 3

//reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel2 = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"];
// reel3 = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"];
// spin = [5, 5, 5];
// result = fruit([reel1, reel2, reel3], spin);