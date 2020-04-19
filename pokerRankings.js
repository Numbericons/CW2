var Result = { "win": 1, "loss": 2, "tie": 3 }

function PokerHand(hand) {
  this.cardVals = "23456789TJQKA";
  let suitsObj = { "S": 0, "H": 0, "D": 0, "C": 0 };
  const cards = hand.split(' ');
  
  let handRanks = {};
  let handIndex = [];
  let straight = null;
  this.kicker;
  this.rank;

  cards.forEach(card => {
    if (handRanks[card[0]]) {
      handRanks[card[0]] = handRanks[card[0]] + 1;
      straight = false;
    } else {
      handRanks[card[0]] = 1;
      handIndex.push(this.cardVals.indexOf(card[0]))
    }
    suitsObj[card[1]] += 1;
  });

  const flush = suitsObj["S"] === 5 || suitsObj["H"] === 5 || suitsObj["D"] === 5 || suitsObj["C"] === 5;
  let handSorted = handIndex.sort((a, b) => a - b);
  this.topCard = this.cardVals[handSorted[handSorted.length - 1]];
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
      if (handIndex.includes(this.cardVals.length - 1)) {
        this.rank = 10;
      } else {
        this.rank = 9;
      }
    } else {
      this.rank = 6;
    }
  }
  
  if (!this.rank && straight) { this.rank = 5 };

  if (!this.rank) { this.rankCombos(handRanks, handSorted) };
}

PokerHand.prototype.compareWith = function (hand) {
  if (this.rank > hand.rank) {
    return Result.win;
  } else if (this.rank < hand.rank) {
    return Result.loss;
  } else {
    if (this.rank === 5 || this.rank === 6 || this.rank > 8) {
      let ownTCIdx = this.cardVals.indexOf(this.topCard);
      let handTCIdx = this.cardVals.indexOf(hand.topCard);
      if (ownTCIdx > handTCIdx) {
        return Result.win;
      } else if (ownTCIdx < handTCIdx) {
        return Result.loss;
      }
    } else if (this.rank === 8) {
      let ownQuadIdx = this.cardVals.indexOf(this.quads);
      let handQuadIdx = this.cardVals.indexOf(hand.quads);
      if (ownQuadIdx > handQuadIdx) {
        return Result.win;
      } else if (ownQuadIdx < handQuadIdx) {
        return Result.loss;
      }

      let ownKickIdx = this.cardVals.indexOf(this.kicker);
      let handKickIdx = this.cardVals.indexOf(hand.kicker);
      if (ownKickIdx > handKickIdx) {
        return Result.win;
      } else if (ownKickIdx < handKickIdx) {
        return Result.loss;
      }
    } else if (this.rank === 7) {
      let ownTripIdx = this.cardVals.indexOf(this.trips);
      let handTripIdx = this.cardVals.indexOf(hand.trips);
      if (ownTripIdx > handTripIdx) {
        return Result.win;
      } else if (ownTripIdx < handTripIdx) {
        return Result.loss;
      }
      let ownPairIdx = this.cardVals.indexOf(this.pairs);
      let handPairIdx = this.cardVals.indexOf(hand.pairs);
      if (ownPairIdx > handPairIdx) {
        return Result.win;
      } else if (ownPairIdx < handPairIdx) {
        return Result.loss;
      }
    } else { //trips, 2 pair, pair, pair
      if (this.trips) {
        let ownTripIdx = this.cardVals.indexOf(this.trips);
        let handTripIdx = this.cardVals.indexOf(hand.trips);
        if (ownTripIdx > handTripIdx) {
          return Result.win;
        } else if (ownTripIdx < handTripIdx) {
          return Result.loss;
        }
      }
      if (this.pair) {
        let ownPairIdx = this.cardVals.indexOf(this.pair[0]);
        let handPairIdx = this.cardVals.indexOf(hand.pair[0]);
        if (ownPairIdx > handPairIdx) {
          return Result.win;
        } else if (ownPairIdx < handPairIdx) {
          return Result.loss;
        }
        if (this.pair[1]) {
          let ownTwoPairIdx = this.cardVals.indexOf(this.pair[1]);
          let handTwoPairIdx = this.cardVals.indexOf(hand.pair[1]);
          if (ownTwoPairIdx > handTwoPairIdx) {
            return Result.win;
          } else if (ownTwoPairIdx < handTwoPairIdx) {
            return Result.loss;
          }
        }
      }
      for (let z=0; z<this.kicker.length;z++) {
        if (this.kicker[z] > hand.kicker[z]) {
          return Result.win;
        } else if (this.kicker[z] < hand.kicker[z]) {
          return Result.loss;
        }
      }
    }
    return Result.tie;
  }
}

PokerHand.prototype.rankCombos = function (handRanks, handSorted) {
  const cardCnts = Object.keys(handRanks);
  this.trips = false;
  this.pair = false;
  for (let k = 0; k < cardCnts.length; k++) {
    if (handRanks[cardCnts[k]] === 4) {
      this.kicker = k === 0 ? cardCnts[1] : cardCnts[0];
      this.quads = cardCnts[k];
      this.rank = 8; //quads
      break;
    };
    if (handRanks[cardCnts[k]] === 3) { 
      this.trips = cardCnts[k];
      if (this.pair) { 
        this.rank = 7; //full house
        break;
      }
    }
    if (handRanks[cardCnts[k]] === 2) {
      if (this.trips) { 
        this.rank = 7; //full house
        break;
      };
      if (this.pair) { 
        this.rank = 3; //two pair
        delete handRanks[cardCnts[k]];
        delete handRanks[this.pair];
        this.kicker = Object.keys(handRanks)[0];
        this.pair = this.cardVals.indexOf(cardCnts[k]) > this.cardVals.indexOf(this.pair) ? `${cardCnts[k]}${this.pair}` : `${this.pair}${cardCnts[k]}`;
        break;
      } else {
        this.pair = cardCnts[k];
      }
    }
  }
  if (!this.rank) {
    handSorted = handSorted.sort((a, b) => b - a);
    if (this.trips) {
      this.rank = 4;
      let idx = handSorted.indexOf(this.cardVals.indexOf(this.trips));
      handSorted.splice(idx,1);
      this.kicker = `${handSorted.join('')}`;
    } else if (this.pair) {
      this.rank = 2;
      let idx = handSorted.indexOf(this.cardVals.indexOf(this.pair));
      handSorted.splice(idx,1);
      this.kicker = `${handSorted.join('')}`;;
    } else {
      this.rank = 1;
      this.kicker = `${handSorted.join('')}`;
    }
  }
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
//      Compare 2nd pair card, pair variable is in order of ranks of the pairs
//        Compare kicker

//  2. Pair
//    Compare pair card
//      Compare kickers
//  1. High Card
//    Compare kickers

// let hand1 = new PokerHand("2H 3H 4H 5H 6H");
// let hand1 = new PokerHand("9D 3H 3S 9H AH");
// let hand1 = new PokerHand("9D 9C KS 9H AS"); 

// var p = new PokerHand("AS AH 2H AD AC");
// var o = new PokerHand("JS JD JC JH 3D");
// p.compareWith(o);

// var p = new PokerHand("2H 3H 4H 5H 6H");
// var o = new PokerHand("AS AD AC AH JD");
// p.compareWith(o);

var p = new PokerHand("4S 3H 2C 7S 5H");
var o = new PokerHand("JH 8S TH AH QH");
p.compareWith(o);

// 2H 2C 3S 3H 3D
// KH KC 3S 3H 3D