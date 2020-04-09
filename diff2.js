function twosDifference(input) {
  let retArr = [];
  input.sort(function (a, b) { return a - b })

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[j] - input[i] === 2) retArr.push([input[i], input[j]]);
    }
  }

  return retArr;
}


// const result = twosDifference([1, 2, 3, 4]) // [[1, 3], [2, 4]]);
const result = twosDifference([1, 3, 4, 6]) // [[1, 3], [4, 6]]);

console.log(result);