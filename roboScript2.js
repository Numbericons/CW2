function resize(grid, pos, rowLen, facing) {
  if (facing === 1 || facing === 3) {
    for (let row=0; row < grid.length; row++) {
      if (grid[row].length < rowLen) {
        facing === 1 ? grid[row].push(" ") : grid[row].unshift(" ");
      }
    }
  } else {
    let newLine = [];
    for (let col=0;col<rowLen;col++) {
      col === pos[1] ? newLine.push("*") :  newLine.push(" ");
    }
    facing === 2 ? grid.unshift(newLine) : grid.push(newLine);
  }
}

function makeMove(grid, pos, rowLen, facing) {
  if (facing === 1) {
    if (grid[pos[0]][pos[1] + 1]) {
      grid[pos[0]][pos[1] + 1] = "*";
    } else {
      grid[pos[0]].push("*");
      rowLen += 1;
      resize(grid, pos, rowLen, facing);
    }
    pos = [pos[0], pos[1] + 1];
  } else if (facing === 2) {
    if (grid[pos[0]-1] && grid[pos[0]-1][pos[1]]) {
      grid[pos[0]-1][pos[1]] = "*";
    } else {
      resize(grid, pos, rowLen, facing);
    }
    let newX = pos[0] - 1 >= 0 ? pos[0] - 1 : 0;
    pos = [newX, pos[1]];
  } else if (facing === 3) {
    if (grid[pos[0]][pos[1] - 1]) {
      grid[pos[0]][pos[1] - 1] = "*";
    } else {
      grid[pos[0]].unshift("*");
      rowLen += 1;
      resize(grid, pos, rowLen, facing);
    }
    let newY = pos[1] - 1 >= 0 ? pos[1] - 1 : 0;
    pos = [pos[0], newY];
  } else if (facing === 4) {
    if (grid[pos[0]+1] && grid[pos[0]+1][pos[1]]) {
      grid[pos[0]+1][pos[1]] = "*";
    } else {
      resize(grid, pos, rowLen, facing);
    }
    pos = [pos[0]+1, pos[1]];
  }
  return [rowLen, pos];
}

function parseCode(code) {
  const commands = "FLR";
  let retStr = "";
  for (let k=0;k<code.length;k++) {  // k = 1, code[k] = F, code[k+1] = 5
    if (commands.includes(code[k]) && (k === code.length - 1 || commands.includes(code[k+1]))) {
      retStr += code[k];
    } else {
      let numIdx = k+1;
      let len = 1;
      while (!commands.includes(code[numIdx+1]) && (numIdx+1)< code.length) { 
        numIdx++;
        len++;
      }
      let numb = parseInt(code.slice(k+1,k+1+len));
      for (let z=0;z<numb;z++) {
        retStr += code[k];
      }
      k = numIdx;
    }
  }
  return retStr;
}

function execute(code) {
  code = parseCode(code);
  let grid = [["*"]];
  let pos = [0,0];
  let rowLen = 1;
  let facing = 1; //1 is right, 2 is down, 3 is left, 4 is up
  for (let z=0;z<code.length;z++) {
    // if (code[z] === 'L' || code[z] === 'R') debugger;
    if (code[z] === 'L') {
      facing = facing - 1;
      if (facing === 0) facing = 4;
    }
    if (code[z] === 'R') facing = (facing + 1) % 4;
    if (code[z] === 'F') {
      let moved = makeMove(grid, pos, rowLen, facing);
      rowLen = moved[0];
      pos = moved[1];
    }
  }

  let retArr = [];
  for (let x=0;x<grid.length;x++) {
    retArr.unshift(grid[x].join(''));
    // grid[x] = grid[x].join('');
  }
  
  return retArr.join('\r\n');
  // return grid.join('\r\n');
}

// const result = execute('');
// const result = execute("FFFFF");
// const result = execute("FFFFFLFFFFFLFFFFFLFFFFFL");
const result = execute("FFFLLFFFFFFRRFFFLFFFRRFFFFFFFF");
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

// Expected: '******\r\n*    *\r\n*    *\r\n*    *\r\n*    *\r\n******'
// tead got: '*    *\r\n     *\r\n     *\r\n     *\r\n     *\r\n      *\r\n*******\r\n       \r\n       \r\n       \r\n       \r\n       \r\n       '

// Expected: '    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   '
// tead got: '    *   \r\n    *   \r\n********\r\n    *  *\r\n    *  *\r\n    ****'

// Expected: '    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   '
// tead got: '**\r\n**'

// Expected: '   *   \r\n   *   \r\n   *   \r\n*******\r\n   *   \r\n   *   \r\n   *   \r\n   *   \r\n   *   '
// tead got: '*        \r\n*        \r\n*        \r\n*********\r\n*        \r\n*        \r\n*        \r\n*        \r\n*        '
// tead got: '   *   \r\n   *   \r\n   *   \r\n*******\r\n   *   \r\n   *   \r\n   *   \r\n   *   \r\n   *   '

