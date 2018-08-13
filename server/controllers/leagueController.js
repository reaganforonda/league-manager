const generalUtil = require('../../src/Utilities/generalUtil')

module.exports = {
    createLeague: (req, res) => {
        const db = req.app.get('db');
        
        const {user_id, leagueName, leagueCity, leagueState, leagueZip} = req.body;
        
        let validLeagueName = generalUtil.validateLeagueName(leagueName);
        let validLeagueCity = generalUtil.validateCity(leagueCity);
        let validLeagueState = generalUtil.validateState(leagueState);
        let validLeagueZip = generalUtil.validateZipCode(leagueZip);
        
        if(validLeagueName && validLeagueCity && validLeagueState && validLeagueZip){
            db.CREATE_LEAGUE([user_id, leagueName, leagueCity, leagueState, leagueZip]).then((league)=> {
                res.status(200).send(league);
            }).catch((err) => {
                console.log(err);
                res.status(500).status(`Server Error: ${err}`)
            })
        } else {
            res.sendStatus(400);
        } 
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
    },

    getManagedLeagues: (req, res)=> {
        const db = req.app.get('db');
        const {userID} = req.params

        if(!userID){
            res.sendStatus(401);
        }

        db.GET_MANAGED_LEAGUES([userID]).then((result)=> {
            res.status(200).send(result);
        }).catch((err)=> {
            console.log(`Server Error while attempting to get managed leagues: ${err}`);
            res.sendStatus(500);
        })
    },

    getLeagueInfo: (req, res) => {
        const db=req.app.get('db');
        const {userID, leagueID} = req.params;

        db.GET_LEAGUE([userID, leagueID]).then((result)=> {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server Error while attempting to retreive league info: ${err}`);
            res.sendStatus(500);
        })
    }
}