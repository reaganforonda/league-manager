UPDATE leagues
SET league_name=$3,
    league_city=$4,
    league_state=$5,
    league_zip=$6,
    max_teams=$7,
    number_games=$8,
    min_players_per_team=$9,
    max_players_per_team=$10
WHERE user_id = $1
AND league_id = $2