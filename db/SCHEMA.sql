CREATE TABLE leagues (
    league_id SERIAL PRIMARY KEY,
    league_name VARCHAR(45)
),

CREATE TABLE teams(
    team_id SERIAL PRIMARY KEY,
    league_id REFERENCES leagues(league_id),
    team_name VARCHAR(45),
    team_city VARCHAR(45),
    team_state VARCHAR(2),
    team_zip INTEGER
)

