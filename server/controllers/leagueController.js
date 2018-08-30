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
        const {userID, leagueID} = req.query

        console.log(req.query);

        if(!userID){
            res.sendStatus(401);
        }

        db.GET_MANAGED_LEAGUES([userID, leagueID]).then((result)=> {
            res.status(200).send(result);
        }).catch((err)=> {
            console.log(`Server Error while attempting to get managed leagues: ${err}`);
            res.sendStatus(500);
        })
    },

    updateLeagueInfo: (req, res) => {
        const db = req.app.get('db');
        const {userID} = req.query;
        const {
            league_id,
            league_name,
            league_city,
            league_state,
            league_zip,
            max_teams,
            number_games,
            min_players_per_team,
            max_players_per_team
        } = req.body;

        console.log(req.body);

        db.UPDATE_LEAGUE_INFO([userID, league_id, league_name, league_city, league_state, league_zip, max_teams, number_games, min_players_per_team, max_players_per_team]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to update League: ${err}`);
            res.sendStatus(500);
        })
    }
}   