require 'byebug'

class LeagueTable
  def initialize
    @alpha = 'abcdefghijklmnopqrstuvwxyz'
    @matches = []
    @results = Hash.new
  end

  def getNumber(string)
    string.split(' ').reject { |str| @alpha.include?(str[0].downcase) }[0].to_i
  end

  def getName(string)
    string.split(' ').select { |str| @alpha.include?(str[0].downcase) }.join(' ')
  end

  def updateWL(name, points)
    @results[name]['wins'] = 0 unless @results[name]['wins']
    @results[name]['losses'] = 0 unless @results[name]['losses']
    @results[name]['draws'] = 0 unless @results[name]['draws']
    if points == 3
      @results[name]['wins'] += 1
    elsif points == 1
      @results[name]['draws'] += 1
    else
      @results[name]['losses'] += 1
    end
  end

  def updateTeam(name, score, oppName, oppScore, points)
    if @results[name]
      @results[name]["goalsFor"] += score
      @results[name]["goalsGiv"] += oppScore
      @results[name]["points"] += points
      updateWL(name, points)
    else
      @results[name] = Hash.new
      @results[name]["goalsFor"] = score
      @results[name]["goalsGiv"] = oppScore
      @results[name]["points"] = points
      updateWL(name, points)
    end
  end
  
  def updateResults(arr)
    ptsH = 1
    ptsA = 1
    hName =  getName(arr[0])
    hScore = getNumber(arr[0])
    aName =  getName(arr[1])
    aScore = getNumber(arr[1])
    if hScore > aScore
      ptsH = 3
      ptsA = 0
    elsif aScore > hScore
      ptsH = 0
      ptsA = 3
    end
    
    # debugger
    updateTeam(hName, hScore, aName, aScore, ptsH)
    updateTeam(aName, aScore, hName, hScore, ptsA)
  end

  def push(match)
    @matches.push(match)
    updateResults(match.split(' - '))
  end

  def get_points(team_name)
    return 0 if !@results[team_name] 
    @results[team_name]['points'] || 0
  end

  def get_goals_for(team_name)
    return 0 if !@results[team_name] 
    @results[team_name]['goalsFor'] || 0
  end

  def get_goals_against(team_name)
    return 0 if !@results[team_name] 
    @results[team_name]['goalsGiv'] || 0
  end

  def get_goal_difference(team_name)
    return 0 if !@results[team_name] 
    goalsFor = @results[team_name]['goalsFor']
    goalsGiv = @results[team_name]['goalsGiv']
    if goalsFor && goalsGiv
      return goalsFor - goalsGiv
    else
      return 0
    end
  end

  def get_wins(team_name)
    return 0 if !@results[team_name] 
    @results[team_name]['wins'] || 0
  end

  def get_draws(team_name)
    return 0 if !@results[team_name] 
    @results[team_name]['draws'] || 0
  end

  def get_losses(team_name)
    return 0 if !@results[team_name] 
    @results[team_name]['losses'] || 0
  end
end

lt = LeagueTable.new
lt.push("Man Utd 3 - 0 Liverpool")
# lt.get_goals_for("Man Utd")
# lt.get_points("Man Utd")
lt.push("Liverpool 1 - 1 Man Utd")