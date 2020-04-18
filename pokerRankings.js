var Result = { "win": 1, "loss": 2, "tie": 3 }

function PokerHand(hand) {
  let cardVals = "23456789TJQKA";
  let suitsObj = { "S": 0, "H": 0, "D": 0, "C": 0 };
  const cards = hand.split(' ');
  
  let handRanks = {};
  let handIndex = [];
  let straight = null;
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
  this.topCard = handSorted[handSorted.length - 1];
  this.secondCard;
  if (straight !== false) {
    straight = true;
    for (let z=0; z< handSorted.length - 1; z++) {
      if (handSorted[z] + 1 !== handSorted[z+1] ) {
        straight = false;
        break;
      }
    }
  }

  if (flush) {
    if (straight) {
      if (handIndex.includes(cardVals.length - 1)) {
        this.rank = 10;
      } else {
        this.rank = 9;
      }
    } else {
      this.rank = 6;
    }
  }
  
  if (straight) { this.rank = 6 };

  if (!this.rank) { this.rankBelowSix(handRanks) };
}

PokerHand.prototype.compareWith = function (hand) {
  let otherHand = new PokerHand(hand);
  return Result.tie;
}

PokerHand.prototype.rankBelowSix = function (handRanks) {
  const cardCnts = Object.keys(handRanks);
  let trips = false;
  let pair = false;
  for (let k = 0; k < cardCnts.length; k++) {
    if (handRanks[cardCnts[k]] === 4) {
      //kicker me timbers
      this.rank = 3;
    };
    if (handRanks[cardCnts[k]] === 3) trips = true;
    if (handRanks[cardCnts[k]] === 2) {
      if (trips) { this.rank = 4};
      if (pair) {
        { this.rank = 2 }
      } else {
        pair = 1;
      }
    }
  }
  if (!this.rank) this.rank = 1;
}
 

//PokerHand initialized will determine it's rank as text and a number for comparison
//check in hand is a straight and flush seperately
//  if straight flush, see if ace included to be royal
//    else determine top card
// Comparing different hands and ranks:
//  10. Royal Flush
//    Compare top card
//  9. Straight Flush
//    Compare top card
//  8. Four of a kind
//    Compare top card
//      Compare Kicker
//  7. Full House
//    Compare trip card
//      Compare pair card
//  6. Flush
//    Compare top card
//  5. Straight
//    Compare top card
//  4. Trips
//    Compare trip card
//      Compare kickers
//  3. 2 Pairs
//    Compare Top pair card
//      Compare 2nd pair card
//        Compare kicker
//  2. Pair
//    Compare pair card
//      Compare kickers
//  1. High Card
//    Compare kickers

let hand1 = new PokerHand("2H 3H 4H 5H 6H");