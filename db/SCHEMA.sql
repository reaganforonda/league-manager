DROP TABLE IF EXISTS fixture_results;
DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS coaches;
DROP TABLE IF EXISTS fixtures;
DROP TABLE IF EXISTS competitions;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS stadiums;
DROP TABLE IF EXISTS seasons;
DROP TABLE IF EXISTS leagues;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS account_types;

CREATE TABLE account_types(
    acct_id SERIAL PRIMARY KEY,
    acct_name VARCHAR(45)
);


CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(45),
    user_email TEXT,
    user_pw TEXT,
    acct_type INTEGER REFERENCES account_types(acct_id)
);

CREATE TABLE leagues (
    league_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    league_name VARCHAR(45),
    league_city VARCHAR(45),
    league_state VARCHAR(45),
    league_zip INTEGER
);

CREATE TABLE teams(
    team_id SERIAL PRIMARY KEY,
    league_id INTEGER REFERENCES leagues(league_id),
    user_id INTEGER REFERENCES users(user_id),
    team_name VARCHAR(45),
    team_city VARCHAR(45),
    team_state VARCHAR(2),
    team_zip INTEGER
);

CREATE TABLE seasons(
    season_id SERIAL PRIMARY KEY,
    league_id INTEGER REFERENCES leagues(league_id),
    season_start_date DATE,
    season_end_date DATE
);

CREATE TABLE coaches(
    coaches_id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(team_id),
    league_id INTEGER REFERENCES leagues(league_id),
    coach_first_name VARCHAR(45),
    coach_last_name VARCHAR(45),
    coach_address VARCHAR(45),
    coach_city VARCHAR(45),
    coach_state VARCHAR(2),
    coach_phone VARCHAR(45),
    coach_email TEXT,
    coach_zip INTEGER
);

CREATE TABLE stadiums(
    stadium_id SERIAL PRIMARY KEY,
    stadium_name VARCHAR(45),
    stadium_address VARCHAR(45),
    stadium_city VARCHAR(45),
    stadium_state VARCHAR(45),
    stadum_zip INTEGER
);

CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    league_id INTEGER REFERENCES leagues(league_id),
    team_id INTEGER REFERENCES teams(team_id),
    p_first_name VARCHAR(45),
    p_last_name VARCHAR(45),
    p_address VARCHAR(45),
    p_city VARCHAR(45),
    p_state VARCHAR(2),
    p_phone VARCHAR(45),
    p_zip INTEGER,
    position VARCHAR(45),
    active BOOLEAN
);


CREATE TABLE fixtures (
    fixture_id SERIAL PRIMARY KEY,
    fixture_date DATE,
    league_id INTEGER REFERENCES leagues(league_id),
    season_id INTEGER REFERENCES seasons(season_id),
    stadium_id INTEGER REFERENCES stadiums(stadium_id),
    home_team INTEGER REFERENCES teams(team_id),
    away_team INTEGER REFERENCES teams(team_id)
);

CREATE TABLE fixture_results(
    result_id SERIAL PRIMARY KEY,
    fixture_id INTEGER REFERENCES fixtures(fixture_id),
    league_id INTEGER REFERENCES leagues(league_id),
    season_id INTEGER REFERENCES seasons(season_id),
    home_team INTEGER REFERENCES teams(team_id),
    away_team INTEGER REFERENCES teams(team_id),
    home_team_goals INTEGER,
    away_team_goals INTEGER,
    home_team_points INTEGER,
    away_team_points INTEGER
);
