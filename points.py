def points(games):
  count = 0
  for game in games:
    if game[0] > game[2]:
      count += 3
    elif game[0] == game[2]:
      count += 1
    else:
      count += 0
  return count
