function makeMove(grid, pos, rowLen, facing) {
  if (facing === 1) {
    if (grid[pos[0]][pos[1] + 1]) {
      grid[pos[0]][pos[1] + 1] = "*";
    } else {
      grid[pos[0]].push("*");
      rowLen += 1;
    }
    pos = [pos[0], pos[1] + 1];
  }
  return [rowLen, pos];
}

function execute(code) {
  let grid = [["*"]];
  let pos = [0,0];
  let rowLen = 1;
  let facing = 1; //1 is right, 2 is down, 3 is left, 4 is up

  for (let z=0;z<code.length;z++) {
    if (code[z] === 'L') {
      facing = facing - 1;
      if (facing === 0) facing = 4;
    }
    if (code[z] === 'R') facing = (facing + 1) % 4;
    let moved = makeMove(grid, pos, rowLen, facing);
    rowLen = moved[0];
    pos = moved[1];
  }

  for (let x=0;x<grid.length;x++) {
    grid[x] = grid[x].join('');
  }
  
  return grid.join('\r\n');
}

// const result = execute('');
const result = execute('FFFFF');
console.log(result);

//visited squares are a * and blank squares are a " "
//Grid - 2d array of [row][col]
//need an asterix in the starting location since robot inherently visits where they start

//Map expansion
//  if we try to move up/down which doesn't yet exist
//    need to push or unshift in a new array of blank spaces the length of the present array or variable that stores this val

//iterate through the passed in code
//  First change facing
//    if the direction is R, add 1 to facing % 4
//    if the direction is L, subtract 1, check if 0, in that case go back to 4
//  If adjusted facing or current char is F, move or expand in the direction of the current facing  
//  moving past (hitting) edges
//    if moving right increase row length by 1 by pushing an * into current row
//      push an " " into all other rows so that all rows maintain the same length
//    if moving left, increase by unshifting a * into current row
//      unshift an " " into all other rows so that all rows maintain the same length
//    if moving up, push a new array of " " with the row length into 2D array
//      make sure to mark an * into the new array in the current row position
//    if moving down, unshift a new array of " " with the row length into 2D array
//      make sure to mark an * into the new array in the current row position

//return by joining the rows of the 2d array with \r\n