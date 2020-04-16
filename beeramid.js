// Returns number of complete beeramid levels
var beeramid = function (bonus, price) {
  const maxCans = bonus / price;
  let level = 0;

  while (maxCans > 0) {
    if (maxCans > level * level) {
      level += 1;
    }
  }
  return level;
}

//divide bonus by price to see the maximum number of cans we could obtain
//then level by level, track the level
//check if the next level can be made and subtract the price of that level from maxCans
