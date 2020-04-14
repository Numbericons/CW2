function chessBoardCellColor(cell1, cell2) {
  const alpha = 'ABCDEFGH'; 
  const cell1Black = (alpha.indexOf(cell1[0]) + 1 + parseInt(cell1[1])) % 2 === 0;
  const cell2Black = (alpha.indexOf(cell2[0]) + 1 + parseInt(cell2[1])) % 2 === 0;
  return cell1Black === cell2Black;
}

// get the letter char index in alpha string + 1
// add this to the number
// see if divisible by 2


//A1  ->  (0+1) + 1 % 2 === 0    Black
//C3 -> (2+1) + 3 % 2 === 0  Black, true
//A1
//H3 -> (7+1) + 3 % 2 !== 0 

chessBoardCellColor("A1", "H3")