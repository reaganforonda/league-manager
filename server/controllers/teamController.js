const axios = require('axios');

module.exports = {
    createPlayer: (req, res, next) => {
        const db = req.app.get('db');
        const {
            leagueID,
            teamID,
            firstName,
            lastName,
            address,
            city,
            state,
            phone,
            zip,
            position,
            email,
            active
        } = req.body;

        db.CREATE_PLAYER([
            leagueID,
            teamID,
            firstName,
            lastName,
            address,
            city,
            state,
            phone,
            zip,
            email,
            position,
            active
        ]).then((result) => {
            console.log(result);
            res.status(200).send(result);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }
}