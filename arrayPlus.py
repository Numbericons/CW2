def array_plus_array(arr1, arr2):
  sum1 = functools.reduce(lambda a, b: a + b, arr1)
  sum2 = functools.reduce(lambda a, b: a + b, arr2)
  return sum1 + sum2