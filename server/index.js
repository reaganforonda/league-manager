const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const massive = require('massive');
const app = express();
const session = require('express-session');
const authController = require('./controllers/authController');

// Destructure the .env
const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET_SESSION
} = process.env;

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

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));


// ENDPOINTS

// AUTH ENDPOINTS
app.get('/api/auth/me', authController.validate)
app.post('/api/auth/login', authController.login);
app.get('/api/auth/logout', authController.logout);
app.post('/api/auth/register', authController.register);


app.listen(SERVER_PORT, ()=> {
    console.log(`Creeping on Port: ${SERVER_PORT}`)
})
