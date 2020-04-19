function pacMan(N, PM, enemies) {
  let board = [];
  for (let i=0;i < N;i++) {
    let subArr = [];
    for (let z=0;z < N;z++) {
      let cell = "C";
      if (PM[0] === i && PM[1] === z) cell = 'P';
      for (let k=0;k < enemies.length;k++) {
        if (enemies[k][0] === i && enemies[k][1] === z) {
          cell = 'E';
          break;
        }
      }
      subArr.push(cell);
    }
    board.push(subArr);
  }

  return recPac(PM, board, enemies)
}

function clearEnemies(pos, enemies) {
  for (let e=0;e<enemies.length;e++) {
    if (enemies[e][0] === pos[0] || enemies[e][1] === pos[1]) return true;
  }
  return false;
}

function recPac(pos, board, enemies) {
  if (board[pos[0]][pos[1]] != 'P' || board[pos[0]][pos[1]] != 'C') return;
  let coins = board[pos[0]][pos[1]] === 'C' ? 1 : 0;
  board[pos[0]][pos[1]] = "E";
  if (clearEnemies([pos[0]+1,pos[1]], enemies) && board[pos[0] + 1] && board[pos[0] + 1][pos[1]] === 'C') {
    coins += recPac([pos[0] + 1, pos[1]], board, enemies);
  }
  if (clearEnemies([pos[0]-1,pos[1]], enemies) && board[pos[0] - 1] && board[pos[0] - 1][pos[1]] === 'C') {
    coins += recPac([pos[0] - 1, pos[1]], board, enemies);
  }
  if (clearEnemies([pos[0],pos[1]+1], enemies) && board[pos[0]] && board[pos[0]][pos[1]+1] === 'C') {
    coins += recPac([pos[0], pos[1]+1], board, enemies);
  }
  if (clearEnemies([pos[0],pos[1]-1], enemies) && board[pos[0]] && board[pos[0]][pos[1]-1] === 'C') {
    coins += recPac([pos[0], pos[1]-1], board, enemies);
  }
  return coins;
}

//grid is N * N
//PM is starting position of pac man
//enemies is an array of enemy positions
//track count of coins

//first step is to build the board and put pacman and his enemies in proper positions
//  all empty positions will be considered coins
// OOOO
// OOEO
// OOOO
// POOO
//iterate through rows and iterate through columns
//  option 1: determine all of the cells that the opponents cover so we know where Pac man can't go
// OOEO
// EEEE
// OOEO
// POEO
//  option 2: don't determine the cells opponents cover ahead of time but in checking individual pakman movements

//  check from P, can pacman go right/left, up/down
//    from each position iteratively [recursively seems more complex]
//      tell if pacman can go right/left or up/down based on the square being a coin (not visited, enemey or starting pos)


// pacMan(4, [3, 0], [[1, 2]]);