SELECT *
FROM fixtures
WHERE ($1 is null OR league_id = $1)
AND ($2 is null OR season_id = $2)   