function chessNotation(notation) {
  const noteArr = notation.split('/');
  let newArr = [];
  for(let i=0;i<8;i++) { newArr.push([]) };
  
  // return retStr;
}

//Starting position and rotated 90 degrees
//"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"       
//"RP4pr/NP4pn/BP4pb/QP4pq/K2P2pk/BP4pb/NP4pn/RP4pr"

//Row number 0 becomes Column (vert) 7
//Row number 1 becomes Column (vert) 6
//row number 2 becomes column (vert) 5
//row number 3 becomes column (vert) 4
//row number 4 becomes column (vert) 3
//row number 5 becomes column (vert) 2
//row number 6 becomes column (vert) 1
//row number 7 becomes column (vert) 0

//split on '/'
//create newArr of 8 empty arrays
//iterate through split array, iterate elements, take elements and unshift into corresponding positions in newArr

//for empty spaces, default to 1 or change next elements value to +1

//return retArr joined appropriately