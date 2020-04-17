function Game(board) {
  this.board = board;
  this.cnt = 0;
  board.forEach(row => {
    this.cnt += row.reduce((a,b) => a + b);
  })
}

Game.prototype.chkRow = function (col, row) {
  if (!this.board[col]) return;
  for (let x=row;x<this.board.length;x++) {
    if (this.board[col][x] === 1) {
      // if (x === 1 && col === 2) debugger;
      this.cnt -= 1;
      this.board[col][x] = 0;
        if (this.board[col-1] && this.board[col-1][x] === 1) this.chkRow(col-1,x);
        if (this.board[col+1] && this.board[col+1][x] === 1) this.chkRow(col+1,x);
        if (this.board[col] && this.board[col][x-1] === 1) this.chkRow(col,x-1);
    } else {
      return;
    }
  }
}

Game.prototype.play = function () {
  let leaps = 0;
  while (this.cnt > 0) {
    for (let i=0;i<this.board.length;i++) {
      for (let j=0;j<this.board[i].length;j++) {
        if (this.board[i][j] === 1) {
          leaps += 1;
          this.chkRow(i, j);
        }
      }
    }
  }
  return leaps;
}

//after finding a pellet
//need to see if more pellets to the right, stop when reach a zero
//  then need to see another pellet below, and continue to the right until reach zero
//    use recursive helper 

// const board = [[1, 1, 0, 0, 0],
// [1, 1, 0, 0, 0],
// [0, 0, 0, 0, 0],
// [0, 0, 0, 1, 1],
// [0, 0, 0, 1, 1]];

// const board = [[1, 0, 1, 0, 1],
//                [1, 0, 1, 0, 1],
//                [1, 1, 1, 0, 0],
//                [0, 0, 0, 1, 1],
//                [0, 0, 0, 1, 1]];

board = [[1, 0, 0, 0, 0],
         [0, 0, 1, 1, 0],
         [1, 0, 1, 0, 1],
         [1, 1, 1, 1, 0],
         [1, 1, 1, 0, 1]];

const game = new Game(board);
console.log(game.play());