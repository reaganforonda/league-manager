CREATE TABLE league(
    league_id SERIAL PRIMARY KEY,
    league_name VARCHAR(45)
)


CREATE TABLE users{
    id SERIAL PRIMARY KEY,

}


CREATE TABLE teams {
    team_id SERIAL PRIMARY KEY,
    league_id INTEGER REFERENCES league(league_id)
    team_name VARCHAR(45)
}

