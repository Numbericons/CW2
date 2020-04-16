function chessNotation(notation) {
  const noteArr = notation.split('/');
  let newArr = [];
  for(let i=0;i<8;i++) { newArr.push("") };

  noteArr.forEach(str => {
    let numOffSet = 0;
    for (let z=0;z<str.length;z++) {
      if (newArr[7] === "2pr") debugger;
      if (parseInt(str[z])) {
        for (let t=0; t<str[z];t++) {
          const num = parseInt(newArr[numOffSet][0]);
          // const num = parseInt(newArr[z+t][0]);
          // const num = parseInt(newArr[7-z-t][0]);
          if (num) {
            // newArr[7-z-t] = (num + 1).toString() + newArr[7-z-t].slice(1);
            newArr[numOffSet] = (num + 1).toString() + newArr[numOffSet].slice(1);
          } else {
            // newArr[7-z-t] = "1" + newArr[7-z-t];
            newArr[numOffSet] = "1" + newArr[numOffSet];
          }
          numOffSet+=1;
        }
      } else {
        // newArr[7-z] = str[z] + newArr[7-z];
        newArr[numOffSet] = str[z] + newArr[numOffSet];
        // newArr[x] = str[z] + newArr[x];
        numOffSet+=1;
      }
    }
  })
  return newArr.join('/');
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

// console.log(chessNotation("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"));
chessNotation("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR")