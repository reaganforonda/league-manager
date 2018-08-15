const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const massive = require('massive');
const app = express();
const session = require('express-session');
const middleware = require('./middlewares/middleware');
const authController = require('./controllers/authController');
const leagueController = require('./controllers/leagueController');
const teamController = require('./controllers/teamController')

// Destructure the .env
const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET_SESSION,
    MODE
} = process.env;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
})

app.use(
    session({
        secret: SECRET_SESSION,
        resave: false,
        saveUninitialized: true
    })
);

app.use(middleware.checkSession )


// AUTH ENDPOINTS
app.get('/api/auth/me', authController.validate)
app.post('/api/auth/login', authController.login);
app.get('/api/auth/logout', authController.logout);
app.post('/api/auth/register', authController.register);

// LEAGUE ENPOINTS
app.get('/api/leagues', leagueController.getAllLeagues);
app.get('/api/leagues/:userID', leagueController.getManagedLeagues)
app.post('/api/register/league', leagueController.createLeague)
app.get('/api/league/:userID/:leagueID', leagueController.getLeagueInfo)
app.post('/api/league/season', leagueController.createNewSeason)
app.get('/api/league/seasons/:leagueiID', leagueController.getSeasons)

// TEAM ENDPOINTS
app.post('/api/team/player', teamController.createPlayer)
app.post('/api/team', teamController.createTeam)
app.get('/api/teams/:userID', teamController.getManagedTeams)
app.get('/api/teams/pending/:userID', teamController.getTeamsPendingApproval)
app.put('/api/team/update/:teamID', teamController.approveTeam)

app.listen(SERVER_PORT, ()=> {
    console.log(`Creeping on Port: ${SERVER_PORT}`)
})