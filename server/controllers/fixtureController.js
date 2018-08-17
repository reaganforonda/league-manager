const axios = require('axios');

module.exports ={
    addFixture: (req, res) => {
        const db = req.app.get('db');
        const {
            fixture_date,
            league_id,
            season_id,
            stadium_id,
            home_team,
            away_team
        } = req.body;

        db.CREATE_FIXTURE([fixture_date, league_id, season_id, stadium_id, home_team, away_team]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to create new fixture: ${err}`);
            res.sendStatus(500);
        })
    }
}