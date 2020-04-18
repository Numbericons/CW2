var Result = { "win": 1, "loss": 2, "tie": 3 }

function PokerHand(hand) {
  let suitsObj = { "S": 0, "H": 0, "D": 0, "C": 0 };
  let carVals = "23456789TJQKA";
  this.top;
  this.kick;
  this.rank;
  const cards = hand.split(' ');
  const suits = cards.forEach(card=> { suitsObj[card[1]] += 1 });
  const flush = suitsObj["S"] === 5 || suitsObj["H"] === 5 || suitsObj["D"] === 5 || suitsObj["C"] === 5;
}

PokerHand.prototype.compareWith = function (hand) {
  return Result.tie;
}
 

//PokerHand initialized will determine it's rank as text and a number for comparison
//check in hand is a straight and flush seperately
//  if straight flush, see if ace included to be royal
//    else determine top card