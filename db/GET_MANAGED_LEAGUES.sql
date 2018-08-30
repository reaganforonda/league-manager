SElECT *
FROM leagues
WHERE user_id = $1
AND ($2 IS NULL OR league_id=$2)