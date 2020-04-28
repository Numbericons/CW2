function nextHigher(n) {
  let num = n + 1;
  const ones = (n >>> 0).toString(2).match(/1/g).length
  while (num > 0) {
    if ((num >>> 0).toString(2).match(/1/g).length === ones) return num;
    num += 1;
  }
}


const result = nextHigher(129);
console.log(result);