function diceSumHelper(dice) {
  if (dice ===1) return [[1],[2],[3],[4],[5],[6]];
  const arr = diceSumHelper(dice-1);
  let retArr = [];
  for (let z=0;z<arr.length;z++) {
    for (let i=1;i<7;i++) {
      retArr.push(arr[z].concat([i]));
    }
  }
  return retArr;
}

function rolldiceSumProb(target, dice) {
  const arr = diceSumHelper(dice);
  let count = 0;
  for (let j=0;j<arr.length;j++) {
    if (arr[j].reduce((a, b) => a + b) === target) count += 1;
  }
  return count / Math.pow(6, dice);
}


//have a target and the number of dice as inputs
//  to solve just 2 dice, could do a nested loop and see when the iterators would sum to the target
//    then increment count to be returned, eventually divided by 6^dice

//since we are using n dice, likely need to calculate all possibilities
//then iterate through possibilities and increment count when they sum to the target
// return this number after dividing by 6^dice

// if we have all possibilities of n - 1 dice
// then need to modify result to include nth dice
// recursive helper?
//

rolldiceSumProb(11, 2);