/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
var splitInteger = function (num, parts) {
  // Complete this function
  if (parts === 1) return [num];
  let retArr = [];
  let times = num / parts;
  if (num % parts === 0) {
    for (let i = 0; i < parts; i++) {
      retArr.push(times);
    }
  } else {
    let part = Math.ceil(num / parts);
    while (num > 0) {
      if (num - part > 0) {
        retArr.push(part);
        num -= part;
      } else {
        part -= 1;
      }
    }
  }
  return retArr;
}