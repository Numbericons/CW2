var Result = { "win": 1, "loss": 2, "tie": 3 }

function PokerHand(hand) {
}

PokerHand.prototype.compareWith = function (hand) {
  return Result.tie;
}