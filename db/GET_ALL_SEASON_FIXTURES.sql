SELECT *
FROM fixtures
JOIN leagues
ON leagues.league_id = fixtures.league_id
WHERE ($1 is null OR fixtures.league_id = $1)
AND ($2 is null OR season_id = $2)   