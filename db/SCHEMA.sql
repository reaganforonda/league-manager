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
),

CREATE TABLE seasons(
    season_id SERIAL PRIMARY KEY,
    league_id REFERENCES leagues(league_id)
    season_start_date DATE,
    season_end_date DATE
),

CREATE TABLE coaches(
    coaches_id SERIAL PRIMARY KEY,
    team_id REFERENCES teams(team_id),
    league_id REFERENCES leagues(league_id),
    coach_first_name VARCHAR(45),
    coach_last_name VARCHAR(45),
    coach_address VARCHAR(45),
    coach_city VARCHAR(45),
    coach_state VARCHAR(2),
    coach_phone VARCHAR(45),
    coach_email TEXT,
    coach_zip INTEGER
),

CREATE TABLE stadiums(
    stadium_id SERIAL PRIMARY KEY,
    stadium_name VARCHAR(45),
    stadium_address VARCHAR(45),
    stadium_city VARCHAR(45),
    stadium_state VARCHAR(45),
    stadum_zip INTEGER
),

CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    p_first_name VARCHAR(45),
    p_last_name VARCHAR(45),
    p_address VARCHAR(45),
    p_city VARCHAR(45),
    p_state VARCHAR(2),
    p_phone VARCHAR(45),
    p_zip INTEGER,
    active BINARY
),

CREATE TABLE competitions(
    competition_id SERIAL PRIMARY KEY,
    competition_name VARCHAR(45)
)

CREATE TABLE fixtures (
    fixture_id SERIAL PRIMARY KEY,
    fixture_date DATE,
    competition_id REFERENCES competitions(competition_id),
    league_id REFERENCES leagues(league_id),
    season_id REFERENCES seasons(season_id),
    stadium_id REFERENCES stadiums(stadium_id),
    home_team REFERENCES teams(team_id),
    away_team REFERENCES teams(away_team)
)

CREATE TABLE fixture_results(
    fixture_id REFERENCES fixtures(fixture_id),
    league_id REFERENCES leagues(league_id),
    season_id REFERENCES seasons(season_id),
    home_team REFERENCES teams(team_id),
    away_team REFERENCES teams(away_team),
    home_team_goals INTEGER,
    away_team_goals INTEGER,
    home_team_points INTEGER,
    away_team_points INTEGER
)