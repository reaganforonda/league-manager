const axios = require('axios')

module.exports = {
    createLeague: (req, res, next) => {
        const db = req.app.get('db');
        
        
        const {user_id, leagueName, leagueCity, leagueState, leagueZip} = req.body;
        
        db.CREATE_LEAGUE([user_id, leagueName, leagueCity, leagueState, leagueZip]).then((league)=> {
            res.status(200).status('League Created')
        }).catch((err) => {
            console.log(err);
            res.status(500).status(`Server Error: ${err}`)
        })
    }
}