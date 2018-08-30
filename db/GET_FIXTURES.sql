SELECT * 
FROM fixtures
JOIN leagues
ON leagues.league_id = fixtures.league_id
WHERE (leagues.user_id = $1)
AND ($2 IS NULL OR fixtures.season_id = $2)
AND ($3 IS NULL OR fixtures.league_id = $3)