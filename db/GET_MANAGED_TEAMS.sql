SElECT *
FROM teams
JOIN leagues on teams.league_id = leagues.league_id
WHERE leagues.user_id = $1