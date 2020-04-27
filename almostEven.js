var splitInteger = function (num, parts) {
  let retArr = [];
  if (num % parts === 0) {
    let times = num / parts;
    for (let i = 0; i < parts; i++) {
      retArr.push(times);
    }
  } else {
    let part = Math.ceil(num / parts);
    while (num > 0) {
      if ((part - 1) % parts === 0) {
        for (let i = 0; i < parts; i++) {
          retArr.push(part - 1);
        }
      } else if (num - part > 0) {
        retArr.push(part);
        parts -= 1;
        num -= part;
      } else {
        part -= 1;
      }
    }
  }
  return retArr;
}

const result = splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
console.log(result);

//if num divides evenly into the number of parts return an array of number / parts with length = parts
//else take the ceiling of the number divided by the parts
//keep reducing the number by this amount un
