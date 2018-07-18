SELECT * FROM teams
JOIN leagues ON teams.league_id = leagues.league_id
WHERE teams.user_id = $1