function combine(el, array) {
  let retArr = array.slice();
  for (let z=0;z<array.length;z++) {
    if (!Array.isArray(retArr[z])) retArr[z] = [retArr[z]];
    retArr[z].unshift(el);
  }
  return retArr;
}

function addArr(arr1,arr2,el) {
  let retArr = [];
  arr1.forEach(el => retArr.push(el));
  retArr.push(el);
  if (arr2) arr2.forEach(el => retArr.push(el));
  return retArr;
}

function permuComb(el, arr) {
  let retArr = []
  for (let x=0;x<arr.length;x++) {
    retArr.push(addArr(arr.slice(0,x), arr.slice(x), el));
  }
  retArr.push(addArr(arr,null,el));
  return retArr;
}

function permu(arr) { // [2,3]
  if (arr.length === 1) return arr;
  let curr = arr.shift(); //2 //[3]
  return permuComb(curr, permu(arr)); //2, [3]
}

function currArr(idx, arr) {
  let retArr = arr.slice();
  retArr.splice(idx,1);
  return retArr;
}

function possibilities(n) {
  let poss = [];
  let nArr = n.toString().split("");
  for (let j = 0; j < nArr.length; j++) {
    const arr = currArr(j, nArr);
    const recArr = permu(arr);
    const currVar = combine(nArr[j], recArr);
    currVar.forEach(el => poss.push(parseInt(el.join(""))))
  }
  return poss;
}

function nextBigger(n) {
  let poss = possibilities(n).sort((a,b) => a - b);
  const next = poss[poss.indexOf(n) + 1];
  return next ? next : -1;
}

// const result = nextBigger(12);
// const result = nextBigger(123);
// const result = nextBigger(513);
const result = nextBigger(2017);
// const result = nextBigger(1085123);
// const result = nextBigger(1234);
console.log(result);

// addArr(["1","2"],["4","5"], "3");

//idea 1: check all possible permutations of numbers that can be made from digits
//  see which is next largest of possiblities
//    detail: first digit can't be 0
//all combos
//  for loop of numbers   *split
//     123 =>  All with 1 at front    123 and  132      all with 2      213     231     312    321
//     1234 =>      1234     1324      1432    1243
//           Putting given number at front and returning all possibilities of the rest of the numbers
//     loop and put the current number with return from another function
//  could take index of initial number and take next, if it exists

//simple examples we can just switch the last 2 digits and see if that is larger

//test cases to think through problem:
//  1010
//   560  => 650
// 1200

//permComb notes
// first pass get the element in front of the (rest) of array so   [2,3]
//after for loop, push in arr + the element as the tail/last element