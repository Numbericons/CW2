var beeramid = function (bonus, price) {
  let cans = Math.floor(bonus / price);
  let level = 0;

  while (cans > 0) {
    let levelSquared = (level + 1) * (level + 1);
    if (cans >= levelSquared) {
      level += 1;
      cans -= levelSquared;
    } else {
      break;
    }
  }
  return level;
}

//divide bonus by price to see the maximum number of cans we could obtain
//then level by level, track the level
//check if the next level can be made and subtract the price of that level from maxCans


beeramid(9, 2);