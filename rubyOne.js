function one(arr, fun) {
  let bool = false;
  for (let z=0; z<arr.length;z++) {
    let result = fun(arr[z]);
    if (bool && result) return false;
    if (result) bool = true;
  }
  return bool;
}