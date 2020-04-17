function Game(board) {
  this.board = board;
  this.cnt = 0;
  board.forEach(row => {
    this.cnt += row.reduce((a,b) => a + b);
  })
}

Game.prototype.chkRow = function (col, row) {
  if (!this.board[col]) return false;
  if (this.board[col][row] !== 1) return false;
  for (let x=row;x<this.board.length;x++) {
    if (this.board[col][x] === 1) {
      this.cnt -= 1;
      this.board[col][x] = 0;
      if (x === row) this.chkRow(col+1,row);
    } else {
      return false;
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

const board = [[1, 1, 0, 0, 0],
[1, 1, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 1, 1],
[0, 0, 0, 1, 1]];

const game = new Game(board);