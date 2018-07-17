const axios = require('axios');
const generalUtil = require('../../src/Utilities/generalUtil')

module.exports = {
    createLeague: (req, res) => {
        const db = req.app.get('db');
        
        
        const {user_id, leagueName, leagueCity, leagueState, leagueZip} = req.body;
        
        let validLeagueName = generalUtil.validateLeagueName(leagueName);
        console.log(validLeagueName);
        let validLeagueCity = generalUtil.validateCity(leagueCity);
        console.log(validLeagueCity);
        let validLeagueState = generalUtil.validateState(leagueState);
        console.log(validLeagueState);
        let validLeagueZip = generalUtil.validateZipCode(leagueZip);
        console.log(validLeagueZip);

        if(validLeagueName && validLeagueCity && validLeagueState && validLeagueZip){
            db.CREATE_LEAGUE([user_id, leagueName, leagueCity, leagueState, leagueZip]).then((league)=> {
                res.status(200).status('League Created')
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
            console.log(result);
            res.status(200).send(result);
        }).catch((err)=> {
            console.log(`Server Error while attempting to get managed leagues: ${err}`);
            res.sendStatus(500);
        })
        
    }
}