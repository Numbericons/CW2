//take in dice, check current player
//**account for doubles

//flip current player for next round
//when we hit end, bounce back num of extra steps

function SnakesLadders() {
  let won = false;
  let p1Pos = 0;
  let p2Pos = 0;
  let currP = 1;
  const ladders = { 2: 38, 7: 14, 8: 31, 15: 26, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 78: 98 }
  const snakes = { 16: 6, 46: 25, 49: 11, 62: 19, 64: 60, 74: 53, 89: 68, 92: 88, 95: 75, 99: 80 }
};

SnakesLadders.prototype.play = function (die1, die2) {
  if (this.won) return 'Game over!';
  if (this.currP === 1) {

  } else {

  }

  let retPlayer = this.currP === 1 ? 2 : 1;
  let retPos = this.currP === 1 ? this.p2Pos : this.p1Pos;
  return `Player ${retPlayer} is on square ${retPos}`;
}