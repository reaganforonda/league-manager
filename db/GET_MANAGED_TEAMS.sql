SElECT *
FROM teams
JOIN leagues on teams.league_id = leagues.league_id
WHERE teams.user_id = $1