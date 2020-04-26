class LeagueTable
  def initialize
    @alpha = 'abcdefghijklmnopqrstuvwxyz'
    @matches = []
    @results = Hash.new
  end

  def getNumber(string)
    string.split(' ').reject { |str| @alpha.include?(str[0]) }[0].to_i
  end

  def getName(string)
    string.split(' ').select { |str| @alpha.include?(str[0]) }.join(' ')
  end

  def push(match)
    @matches.push(match)
    arr = match.split(' - ')
  end
end