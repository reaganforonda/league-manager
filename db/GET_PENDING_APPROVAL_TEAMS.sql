SELECT *
FROM teams
JOIN leagues 
ON leagues.league_id = teams.league_id
WHERE leagues.user_id = $1
AND teams.approved = false