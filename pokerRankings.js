var Result = { "win": 1, "loss": 2, "tie": 3 }

function PokerHand(hand) {
  let cardVals = "23456789TJQKA";
  let suitsObj = { "S": 0, "H": 0, "D": 0, "C": 0 };
  const cards = hand.split(' ');
  
  let handRanks = {};
  let handIndex = [];
  let straight = null;
  this.top;
  this.kick;
  this.rank;

  cards.forEach(card => {
    if (handRanks[card[0]]) {
      handRanks[card[0]] = handRanks[card[0]] + 1;
      straight = false;
    } else {
      handRanks[card[0]] = 1;
      handIndex.push(cardVals.indexOf(card[0]))
    }
    suitsObj[card[1]] += 1;
  });

  const flush = suitsObj["S"] === 5 || suitsObj["H"] === 5 || suitsObj["D"] === 5 || suitsObj["C"] === 5;
  let handSorted = handIndex.sort((a, b) => a - b);
  if (straight !== false) {
    straight = true;
    for (let z=0; z< handSorted.length - 1; z++) {
      if (handSorted[z] + 1 !== handSorted[z+1] ) {
        straight = false;
        break;
      }
    }
  }

  if (straight && flush) {
    if (handIndex.includes(cardVals.length - 1)) return "Royal Flush";
    return "Straight Flush";
  }

  const cardCnts = Object.keys(handRanks);
  let trips = false;
  let pair = false;
  for (let k=0; k < cardCnts.length;k++) {
    if (handRanks[cardCnts[k]] === 4) return 'Four of a kind';
    if (handRanks[cardCnts[k]] === 3) trips = true;
    if (handRanks[cardCnts[k]] === 2) {
      if (trips) return 'Full House';
      if (pair) return 'Two Pair';
      pair = 1;
    }
  }
  return 'High card';
}

PokerHand.prototype.compareWith = function (hand) {
  return Result.tie;
}
 

//PokerHand initialized will determine it's rank as text and a number for comparison
//check in hand is a straight and flush seperately
//  if straight flush, see if ace included to be royal
//    else determine top card

let hand1 = new PokerHand("2H 3H 4H 5H 6H");