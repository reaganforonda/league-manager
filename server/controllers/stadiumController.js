const axios = require('axios');

module.exports = {
    addStadium: (req, res) => {
        const db = req.app.get('db');
        const {
            user,
            stadium_name,
            stadium_address,
            stadium_city,
            stadium_state,
            stadium_zip
        } = req.body;

        if (user.acct_type === 1) {
            db.CREATE_STADIUM([stadium_name, stadium_address, stadium_city, stadium_state, stadium_zip]).then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(`Server error while attempting to add new stadium: ${err}`)
                res.sendStatus(500);
            })
        } else {
            res.sendStatus(401);
        }
    },

    getStadiums: (req, res) => {
        const db = req.app.get('db');

        db.GET_STADIUMS([]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.sendStatus(500);
            console.log(`Server error while attempting to retrieve all stadiums: ${err}`)
        })
    }
}