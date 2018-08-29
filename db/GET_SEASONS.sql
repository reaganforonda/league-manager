SELECT * FROM SEASONS
JOIN leagues
ON seasons.league_id = leagues.league_id
JOIN users
ON leagues.user_id = users.user_id
WHERE ($1 IS NULL OR seasons.league_id=$1)
AND ($2 IS NULL OR seasons.season_id=$2)
AND (users.user_id=$3);