const axios = require('axios')

module.exports = {
    createLeague: (req, res) => {
        const db = req.app.get('db');
        
        
        const {user_id, leagueName, leagueCity, leagueState, leagueZip} = req.body;
        
        db.CREATE_LEAGUE([user_id, leagueName, leagueCity, leagueState, leagueZip]).then((league)=> {
            res.status(200).status('League Created')
        }).catch((err) => {
            console.log(err);
            res.status(500).status(`Server Error: ${err}`)
        })
    },

    getAllLeagues: (req, res) => {
        const db = req.app.get('db');

        db.GET_ALL_LEAGUES().then((result)=> {
            console.log(result);
            res.status(200).send(result)
        }).catch((err)=> {
            res.sendStatus(500);
            console.log(err);
        })
    }
}