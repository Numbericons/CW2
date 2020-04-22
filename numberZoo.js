function findNumber(array) {
  let end = array.length;
  for (let i=1;i<end;i++) {
    if (!array.includes(i)) return i;
  }
  return end + 1;
}

const findNumber = array => {
  const totalLength = array.length + 1
  const totalSum = (totalLength * (totalLength + 1)) / 2
  const currentSum = array.reduce((acc, num) => acc + num, 0)
  return totalSum - currentSum
}

// function findNumber(array) {
//   let arr = array.sort((a,b) => ( a - b))
//   for (let i=0;i<arr.length;i++) {
//     if (arr[i] !== i+1) return i+1;
//   }
//   return arr[arr.length-1] + 1;
// }

// const result = findNumber([7,8,1,2,4,5,6]);
const result = findNumber([1, 2, 3, 5]);
console.log(result);


//have a list with one missing element