INSERT INTO teams
(
    league_id,
    league_manager,
    team_name,
    team_city,
    team_state,
    team_zip
)
VALUES
($1, $2, $3, $4, $5, $6)