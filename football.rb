class LeagueTable
  def initialize
    @alpha = 'abcdefghijklmnopqrstuvwxyz'
    @matches = []
    @results = Hash.new
  end

  def getNumber(string)
    score = ''
    string.each_char do |c|
      unless @alpha.include?(c.downcase)
        name += c
      end
    end
    return score.to_i
  end

  def getName(string)
    string.split(' ').select { |str| @alpha.include?(str[0]) }.join(' ')
  end

  def push(match)
    @matches.push(match)
    arr = match.split(' - ')
  end
end