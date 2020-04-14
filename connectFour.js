function Connect4() {
  this.won = false;
  this.currP = 1;
  this.board = [];
  for (let i=0;i<7;i++) {
    this.board.push(['X','X','X','X','X','X']);
  }
};

Connect4.prototype.checkDiag = function (pos,dir) {
  //make sure pos[0] points to valid column on the board
  if (!this.board[pos[0]] || !this.board[pos[0]+dir[0]] || !this.board[pos[0]+(2*dir[0])] || !this.board[pos[0]+(3*dir[0])]) return false;

  if (this.board[pos[0]][pos[1]] === this.currP && this.board[pos[0]+dir[0]][pos[1]+dir[1]] === this.currP &&
      this.board[pos[0]+(2*dir[0])][pos[1]+(2*dir[1])] === this.currP && 
      this.board[pos[0]+(3*dir[0])][pos[1]+(3*dir[1])] === this.currP) {
        return true;
  }
  return false;
}

Connect4.prototype.checkWins = function (col, row) {
  for (let i=0;i<this.board.length -1;i++) {
    let verCnt = 0;
    for (let j = this.board[i].length -1;j>=0;j--) {
      if (this.board[i][j] === 'X') break;
      if (this.board[i][j] === this.currP) {
        verCnt += 1;
        if (verCnt === 4) return true;
      } else {
        verCnt = 0;
      }
    }
    let horCnt = 0;
    for (let k = 0; k < this.board[i].length; k++) {
      if (this.board[k][i] === this.currP) {
        horCnt += 1;
        if (horCnt === 4) return true;
      } else {
        horCnt = 0;
      }
    }
  }
  const directions = [[-1,-1],[1,-1],[1,1],[-1,1]];
  for (let s=0;s<directions.length;s++) {
    let dir = directions[s];
    if (this.checkDiag([col,row],dir)) return true;
    if (this.checkDiag([col-dir[0],row-dir[1]],dir)) return true;
    if (this.checkDiag([col-(2*dir[0]),row-(2*dir[1])],dir)) return true;
    if (this.checkDiag([col-(3*dir[0]),row-(3*dir[1])],dir)) return true;
  }
  return false;
}

Connect4.prototype.play = function (col) {
  let row;
  if (this.won) return "Game has finished!";
  if (this.board[col][0] !== 'X') return "Column full!";
  for (let i=this.board[col].length -1;i>=0; i--) {
    if (this.board[col][i] === 'X') {
      this.board[col][i] = this.currP;
      row = i;
      break
    }
  }
  if (this.checkWins(col, row)) {
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

// UpRight	And E3 + F2 + G1 + 1 - 1
// UpLeft	And C3 + B2 + A1 - 1 - 1

// DownRight	AND E5 + F6 + G7	1 + 1 and + 1 + 1
// DownLeft	And C5 + B6 + A7 - 1 + 1

//UpRight			
// +1 - 1
// 3 times
// Or start - 1 + 1 and 2 times
// or start - 2 + 2 and 1 times
// Or - 3 + 3 and 1 times
// BUT this is same as DownLeft so ignore

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


// game = new Connect4();
// game.play(1) // "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// game.play(1) // "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// game.play(2) // "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// game.play(2) // "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// game.play(3) // "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// game.play(3) // "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// game.play(4) // "Player 1 wins!", "Should return 'Player 1 wins!'")
// game.play(4) // "Game has finished!", "Should return 'Game has finished!'")

// game = new Connect4();
// game.play(3) //1
// game.play(4)
// game.play(4)  //1
// game.play(6)
// game.play(5)  //1
// game.play(5)
// game.play(5)  //1
// game.play(6)
// game.play(6)  //1
// game.play(2)
// let result = game.play(6)  //1
// console.log(result);

game = new Connect4();
game.play(3) //1
game.play(3)
game.play(2)  //1
game.play(2)
game.play(5)  //1
game.play(3)
game.play(3)  //1
game.play(0)
let result = game.play(4)  //1
console.log(result);


