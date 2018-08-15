SELECT *
FROM seasons
JOIN fixtures on seasons.season_id=fixtures.season_id
JOIN fixture_results on seasons.season_id = fixture_results.season_id
WHERE
seasons.league_id = 1