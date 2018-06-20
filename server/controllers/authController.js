const bcrypt = require('bcrypt');
const axios = require('axios');

module.exports = {
    registerUser: async (req, res, next) => {

    },

    login: (req, res, next) => {
        const {userName, pw} = req.body;
        const db = req.app.get('db');
    }
}