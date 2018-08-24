const axios = require('axios');

module.exports = {
    
    createTeam : (req, res, next) => {
        const db = req.app.get('db');

        const {
            leagueID,
            userID,
            teamName,
            city,
            state,
            zip
        } = req.body

        db.CREATE_TEAM([
            leagueID, userID, teamName, city, state, zip
        ]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to create team: ${err}`)
            res.sendStatus(500);
        })
    },

    getManagedTeams: (req, res)=> {
        const db = req.app.get('db');
        const {userID} = req.params;

        db.GET_MANAGED_TEAMS([userID]).then((result) => {
            res.status(200).send(result);
        }).catch((err)=> {
            console.log(`Server error while attempting to get managed teams: ${err}`)
            res.sendStatus(500);
        })
    },

    getTeamsPendingApproval: (req, res) => {
        const db = req.app.get('db');
        const {userID} = req.params;

        db.GET_PENDING_APPROVAL_TEAMS([userID]).then((teams) => {
            res.status(200).send(teams);
        }).catch((err)=> {
            console.log(`Server error while attempting to get teams pending approval : ${err}`);
            res.sendStatus(500);
        })
    },

    approveTeam: (req, res) => {
        const db = req.app.get('db');
        const {teamID} = req.params;
        const {user} = req.body;

        db.APPROVE_PENDING_TEAM([teamID]).then((result)=> {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to update team: ${err}`);
            res.sendStatus(500);
        })
    },

    getTeamsByLeagueID: (req, res) => {
        const db = req.app.get('db');
        const {userID, leagueID} = req.params;
        
        db.GET_TEAMS_IN_LEAGUE([userID, leagueID]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to get teams by league id: ${err}`)
            res.sendStatus(500);
        })
    },
}