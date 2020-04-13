//take in dice, check current player
//**account for doubles

//flip current player for next round
//when we hit end, bounce back num of extra steps

function SnakesLadders() {
  this.won = false;
  this.p1Pos = 0;
  this.p2Pos = 0;
  this.currP = 1;
  this.ladders = { 2: 38, 7: 14, 8: 31, 15: 26, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 78: 98 }
  this.snakes = { 16: 6, 46: 25, 49: 11, 62: 19, 64: 60, 74: 53, 89: 68, 92: 88, 95: 75, 99: 80 }
};



SnakesLadders.prototype.play = function (die1, die2) {
  if (this.won) return 'Game over!';

  let pos = this.currP === 1 ? this.p1Pos : this.p2Pos;

  pos += die1 + die2;
  if (this.ladders[pos]) pos = this.ladders[pos];
  if (this.snakes[pos]) pos = this.snakes[pos];
  if (pos === 100) {
    this.won = true;
  } else if (pos > 100) {
    pos = 100 - (pos - 100);
    if (this.snakes[pos]) pos = this.snakes[pos];
  }

  this.currP === 1 ? this.p1Pos = pos : this.p2Pos = pos;
  if (this.won) return `Player ${this.currP} Wins!`;
  if (die1 !== die2) this.currP = this.currP === 1 ? 2 : 1;

  // if (this.currP === 1) {
  //   this.p1Pos += die1 + die2;
  //   if (this.ladders[this.p1Pos]) this.p1Pos = this.ladders[this.p1Pos];
  //   if (this.snakes[this.p1Pos]) this.p1Pos = this.snakes[this.p1Pos];
  //   if (this.p1Pos === 100) {
  //     this.won === true;
  //     return `Player ${1} Wins!`;
  //   } else if (this.p1Pos > 100) {
  //     this.p1Pos = 100 - (this.p1Pos - 100);
  //     if (this.snakes[this.p1Pos]) this.p1Pos = this.snakes[this.p1Pos];
  //   }
  //   if (die1 !== die2) this.currP = 2;
  // } else {
  //   this.p2Pos += die1 + die2;
  //   if (this.ladders[this.p2Pos]) this.p2Pos = this.ladders[this.p2Pos];
  //   if (this.snakes[this.p2Pos]) this.p2Pos = this.snakes[this.p2Pos];
  //   if (this.p2Pos === 100) {
  //     this.won === true;
  //     return `Player ${2} Wins!`;
  //   } else if (this.p2Pos > 100) {
  //     this.p2Pos = 100 - (this.p2Pos - 100);
  //     if (this.snakes[this.p2Pos]) this.p2Pos = this.snakes[this.p2Pos];
  //   }
  //   if (die1 !== die2) this.currP = 1;
  // }

  // if (die2 === 5) debugger;
  let retPlayer = die1 !== die2 && this.currP !== 2 ? 2 : 1;
  let retPos = die1 !== die2 && this.currP !== 2 ? this.p2Pos : this.p1Pos;
  return `Player ${retPlayer} is on square ${retPos}`;
}

var game = new SnakesLadders();
const result1 = game.play(1, 1) //"Player 1 is on square 38", "Should return: 'Player 1 is on square 38'");
game.play(1,5);
game.play(6,2);
game.play(1,1);
console.log(result1);
// Test.assertEquals(game.play(1, 5), "Player 1 is on square 44", "Should return: 'Player 1 is on square 44'");
// Test.assertEquals(game.play(6, 2), "Player 2 is on square 31", "Should return: 'Player 2 is on square 31'");
// Test.assertEquals(game.play(1, 1), "Player 1 is on square 25", "Should return: 'Player 1 is on square 25'");