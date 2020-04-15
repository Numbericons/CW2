function diceSumHelper(dice, array) {
  let retArr = array || [];
  
}

function rolldiceSumProb(target, dice) {
  diceSumHelper(dice);
  return prob;
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