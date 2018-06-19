const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const massive = require('massive');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

// Destructure the .env
const {
    SERVER_PORT
} = process.env;




app.listen(SERVER_PORT, ()=> {
    console.log(`Creeping on Port: ${SERVER_PORT}`)
})
