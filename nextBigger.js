function combine(el, array) {
  let retArr = array.split().join();
  for (let z=0;z<array.length;z++) {
    retArr[z].unshift(el);
  }
  return retArr;
}

function permu(arr) {
  if (arr.length === 1) return arr;
  let curr = arr.shift();
  let _permu = perm(arr);
  return combine(curr, _permu);
}

function nextBigger(n) {
  let poss = [];
  let arr = n.toString().split();
  for (let j=0;j<arr.length;j++) {
    poss.push(permu(arr))
  }
  permu(n.toString().split());
}

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