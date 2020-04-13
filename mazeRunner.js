//Given 2d array
//find starting point and set as variable
//Iterate through directions array
//case statement to check letter dir and adjust pos accordingly
// i is columns, j is rows
//if hit wall or out of bounds, return 'Dead'
//if hit a '3' pos, return early 'Finish'
//if end of array reached, return 'Lost'

function findStart(maze) {
  for (let col=0;col< maze.length;col++) {
    for (let row=0;row< maze.length;row++) {
      if (maze[col][row] === 2) return [col,row];
    }
  }
  return null;
}

function outOfBounds(maze, pos, dir) {
  if (pos[0] === 0 && dir === "N") return true;
  if (pos[0] === maze.length -1 && dir === "S") return true;
  if (pos[1] === 0 && dir === "W") return true;
  if (pos[1] === maze.length -1 && dir === "E") return true;
  return false;
}

function changePos(pos,dir){
  if (dir === "N" || dir === "S") {
    let col = dir === "N" ? pos[0] - 1 : pos[0] + 1;
    return [col,pos[1]];
  } else {
    let row = dir === "E" ? pos[1] + 1 : pos[1] - 1;
    return [pos[0],row];
  }
}

function makeMove(maze, pos, dir) {
  if (outOfBounds(maze,pos, dir)) return 'Dead';
  let newPos = changePos(pos, dir);
  if (maze[newPos[0]][newPos[1]] === 1) return 'Dead';
  if (maze[newPos[0]][newPos[1]] === 3) return 'Finish';
  return newPos;
}

function mazeRunner(maze, directions) {
  let pos = findStart(maze);
  
  for (i=0;i<directions.length;i++) {
    let result = makeMove(maze, pos, directions[i]);
    if (result === 'Dead') return 'Dead';
    if (result === 'Finish') return 'Finish';
    pos = result;
  }
  return 'Lost';
}

var maze = [[1, 1, 1, 1, 1, 1, 1], //0
[1, 0, 0, 0, 0, 0, 3], //1
[1, 0, 1, 0, 1, 0, 1],
[0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 1],
[1, 2, 1, 0, 1, 0, 1]];

mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]);
// mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"]);
// mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W"]);

// mazeRunner(maze, ["N", "N", "N", "W", "W"]);
// mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]);

// mazeRunner(maze, ["N", "E", "E", "E", "E"]);