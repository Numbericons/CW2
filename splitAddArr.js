function splitAndAdd(arr, n) {
  if (n === 0 || arr.length === 1) return arr;
  const arr1 = arr.slice(0, arr.length / 2);
  const arr2 = arr.slice(arr.length / 2);
  const evenLen = arr1.length === arr2.length;
  let retArr = [];
  for (let z=0; z<arr2.length;z++) {
    if (!evenLen && z === 0) {
      retArr.push(arr2[z]); 
      continue;
    }
    evenLen ? arr.push(arr1[z] + arr2[z]) : arr.push(arr1[z-1] + arr2[z]);
  }
  return splitAndAdd(retArr, n-1);
}

const result = splitAndAdd([1,2,3,4,5], 2);
console.log(result);

//recursive function
//base is either a length 1 array or n is 0 so no more splits are necessary
//check if the split arrays are equal lengths
//loop based on the length of the 2nd array as this one can be potentially longer
//  if lengths are not equal, the first iteration just take the first element of 2nd array
//    on subsequent iterations, take array 1 at i - 1 added to array 2 at i