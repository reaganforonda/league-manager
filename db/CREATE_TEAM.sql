INSERT INTO teams
(
    league_id,
    user_id,
    team_name,
    team_city,
    team_state,
    team_zip,
    approved
)
VALUES
($1, $2, $3, $4, $5, $6, false)