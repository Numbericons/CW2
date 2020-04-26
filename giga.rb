require 'byebug'

def gigasecond date
  Date.new(date.year, date.month, date.day) + 10**9 / 60 / 60 / 24
end
