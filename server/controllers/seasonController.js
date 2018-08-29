module.exports = {
    createSeason : (req, res) => {
        const db = req.app.get('db');
        const {userID}  = req.params;
        const {league_id, season_start_date, season_end_date} = req.body;

        db.CREATE_NEW_SEASON([league_id, season_start_date, season_end_date]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to add new season: ${err}`);
            res.sendStatus(500);
        })
    },

    getSeason:(req, res) => {
        const db = req.app.get('db');
        const {userID, leagueID, seasonID} = req.query;

        db.GET_SEASONS([leagueID, seasonID, userID]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to get seasons: ${err}`);
            res.sendStatus(500);
        })
    }
}