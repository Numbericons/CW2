function Connect4() {
  this.won = false;
  this.currP = 1;
  this.board = [];
  for (let i=0;i<7;i++) {
    this.board.push([0,0,0,0,0,0]);
  }
};

Connect4.prototype.checkWins = function () {
  for (let i=0;i<this.board.length -1;i++) {
    let verCnt = 0;
    for (let j = this.board[i].length -1;j>=0;j--) {
      if (this.board[i][j] === 0) break;
      if (this.board[i][j] === this.currP) {
        verCnt += 1;
        if (verCnt === 4) return true;
      } else {
        verCnt = 0;
      }
    }
    let horCnt = 0;
    for (let k = 0; k < this.board[i].length - 1; k++) {
      if (this.board[k][i] === this.currP) {
        horCnt += 1;
        if (horCnt === 4) return true;
      } else {
        horCnt = 0;
      }
    }
  }
  return false;
}

Connect4.prototype.play = function (col) {
  if (this.won) return "Game has finished!";
  if (this.board[col][0] !== 0) return "Column full!";
  for (let i=this.board[col].length -1;i>=0; i--) {
    if (this.board[col][i] === 0) {
      this.board[col][i] = this.currP;
      break
    }
  }
  if (this.checkWins()) {
    this.won = true;
    return `Player ${this.currP} wins!`
  }
  this.currP = this.currP === 1 ? 2 : 1;
  return `Player ${this.currP === 1 ? 2 : 1} has a turn`;
};


//columns are index (0-6), 7 rows
//columns are arrays of 7 elements. The bottom is the 7th (i = 6) element
//a win is when a player has 4 pieces in a row horizontally, vertically, or diagonally 

//play method takes a column to add a piece to
//If game was won previously, should return: ”Game has finished!”
//if this column is already full, return: ”Column full!"

// method which takes an array and determines if there are 4 in a row within that array

//vertical wins - iterate across columns, check if same marker in 4 positions in a row using helper
//horizontal wins -  loop where j < #num rows, build array of that position within the rows for every col and send to helper
//diagonal wins - 
//from col[0][0] down to col[0][3] and horizontal from col[0][0] to col[2][0]

//if this results in a win, return: "Player n wins!"
//if this doesn't result in a win, return: ”Player n has a turn”

// game = new Connect4();
// game.play(0); //"Player 1 has a turn", "Should return 'Player 1 has a turn'")
// game.play(1); //"Player 2 has a turn", "Should return 'Player 2 has a turn'")
// game.play(0); //"Player 1 has a turn", "Should return 'Player 1 has a turn'")
// game.play(1); //"Player 2 has a turn", "Should return 'Player 2 has a turn'")
// game.play(0); //"Player 1 has a turn", "Should return 'Player 1 has a turn'")
// game.play(1); //"Player 2 has a turn", "Should return 'Player 2 has a turn'")
// game.play(0); //"Player 1 wins!", "Should return 'Player 1 wins!'")

// game = new Connect4();
// game.play(4) // "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// game.play(4) // "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// game.play(4) // "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// game.play(4) // "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// game.play(4) // "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// game.play(4) // "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// game.play(4) // "Column full!", "Should return 'Column full!'")


game = new Connect4();
game.play(1) // "Player 1 has a turn", "Should return 'Player 1 has a turn'")
game.play(1) // "Player 2 has a turn", "Should return 'Player 2 has a turn'")
game.play(2) // "Player 1 has a turn", "Should return 'Player 1 has a turn'")
game.play(2) // "Player 2 has a turn", "Should return 'Player 2 has a turn'")
game.play(3) // "Player 1 has a turn", "Should return 'Player 1 has a turn'")
game.play(3) // "Player 2 has a turn", "Should return 'Player 2 has a turn'")
game.play(4) // "Player 1 wins!", "Should return 'Player 1 wins!'")
game.play(4) // "Game has finished!", "Should return 'Game has finished!'")