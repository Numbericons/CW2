function twosDifference(input) {
  let retArr = [];
  input.sort(function (a, b) { return a - b })

  for (let i=0;i<input.length;i++){
    for (let j=0; j < input.length; j++) {
      if (Math.abs(input[j] - input[i]) === 2) {
        retArr.push([input[i], input[j]]);
        // retArr.push([input[i], input[j]].sort(function (a, b) { return a - b }));
        input.splice(j, 1);
        j = j - 2;
        input.splice(i, 1);
        i--;
      }
    }
  }

  return retArr;
}


// const result = twosDifference([1, 2, 3, 4]) // [[1, 3], [2, 4]]);
const result = twosDifference([1, 3, 4, 6]) // [[1, 3], [4, 6]]);

console.log(result);


// input.forEach((num, i) => {
//   input.forEach((num2, j) => {
//     if (Math.abs(num2 - num) === 2) {
//       retArr.push([num, num2].sort(function (a, b) { return a - b }));
//       input.splice(j, 1);
//       input.splice(i, 1);
//     }
//   })
// })
