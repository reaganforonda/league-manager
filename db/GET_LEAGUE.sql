SELECT * FROM leagues
WHERE leagues.league_id = $2
AND leagues.user_id = $1