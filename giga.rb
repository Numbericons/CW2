require 'byebug'

def gigasecond date
  debugger
  # yr = date.year
  # mnt = date.month
  # day = date.day
  # 10**9 / 60        / 60         / 24        / 365
  # seconds / 60 = mins / 60 = hours / 24 = days / 365 = years

  Date.new(date.year, date.month, date.day) + 10**9 / 60 / 60 / 24
end
