const axios = require('axios');

module.exports ={
    addFixture: (req, res) => {
        const db = req.app.get('db');
        const {
            fixtureDate,
            leagueID,
            seasonID,
            stadiumID,
            homeTeamID,
            awayTeamID
        } = req.body;

        db.CREATE_FIXTURE([fixtureDate, leagueID, seasonID, stadiumID, homeTeamID, awayTeamID]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to create new fixture: ${err}`);
            res.sendStatus(500);
        })
    },

    getSeasonFixtures: (req, res) => {
        const db = req.app.get('db');
        const {userID, seasonID, leagueID} = req.query

        db.GET_ALL_SEASON_FIXTURES([userID, seasonID, leagueID]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to retrieve GET_ALL_FIXTURES: ${err}`)
            res.sendStatus(500);
        })
    }
}