SELECT * FROM leagues
JOIN teams
ON leagues.league_id = teams.league_id
WHERE leagues.user_id = $1
AND leagues.league_id = $2