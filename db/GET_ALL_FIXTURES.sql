SELECT * 
FROM fixtures
JOIN fixture_results
ON fixture_results.fixture_id = fixtures.fixture_id
WHERE fixtures.league_id = 1
AND fixture.fixture_date > '2018-09-01'