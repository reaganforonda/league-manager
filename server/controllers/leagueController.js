const generalUtil = require('../../src/Utilities/generalUtil')

module.exports = {
    createLeague: (req, res) => {
        const db = req.app.get('db');
        
        const {
            leagueName,
            leagueCity,
            leagueState,
            leagueZip,
            maxTeams,
            numberGames,
            minPlayersPerTeam,
            maxPlayersPerTeam,
            league_manager
        } = req.body;
        
        let validLeagueName = generalUtil.validateLeagueName(leagueName);
        let validLeagueCity = generalUtil.validateCity(leagueCity);
        let validLeagueState = generalUtil.validateState(leagueState);
        let validLeagueZip = generalUtil.validateZipCode(leagueZip);
        
        if(validLeagueName && validLeagueCity && validLeagueState && validLeagueZip){
            db.CREATE_LEAGUE([league_manager, leagueName, leagueCity, leagueState, leagueZip, maxTeams, 
                numberGames, minPlayersPerTeam, maxPlayersPerTeam]).then((league)=> {
                    res.status(200).send(league);
            }).catch((err) => {
                console.log(err);
                res.status(500).status(`Server Error: ${err}`)
            })
        } else {
            res.sendStatus(400);
        } 
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
    },

    createNewSeason: (req, res) => {
        const db=req.app.get('db');
        const {userID, leagueID, seasonStartDate, seasonEndDate} = req.body;
        
        if(!userID){
            res.sendStatus(401);
            // TODO: Check error code
        }

        db.CREATE_NEW_SEASON([leagueID, seasonStartDate, seasonEndDate]).then((result)=> {
            res.status(200).send(result);
        }).catch((err)=> {
            console.log(`Server error while attempting to add new season: ${err}`)
            res.sendStatus(500);
        })
    },

    getSeasons: (req, res) => {
        const db = req.app.get('db');
        const {leagueID} = req.params;

        db.GET_ALL_SEASON_BY_LEAGUE([leagueID]).then((result)=> {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to retreive all seasons: ${err}`);
            res.sendStatus(500);
        })
    }
}   