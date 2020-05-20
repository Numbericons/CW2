from functools import reduce

def array_plus_array(arr1, arr2):
  return reduce(lambda a, b: a + b, arr1) + reduce(lambda a, b: a + b, arr2)
