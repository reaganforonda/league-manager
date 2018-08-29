SELECT * 
FROM players
JOIN teams
ON teams.team_id = players.team_id
JOIN leagues
ON players.league_id = leagues.league_id
WHERE ($1 IS NULL OR teams.league_id=$1)
AND ($2 IS NULL OR teams.team_id=$2)
AND (teams.league_manager=$3 OR teams.team_manager=$3);