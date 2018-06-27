const bcrypt = require('bcrypt');
const axios = require('axios');

module.exports = {
    registerUser: async (req, res, next) => {

    },

    login: (req, res, next) => {
        const db = req.app.get('db');
        const {userName, pw} = req.body;

        db.GET_USERNAMES([userName]).then(user => {
            if(user.length !== 0){
                const userPW = user[0].user_pw;
                
                const validPassword = bcrypt.compareSync(pw, )
            }
        })
    }
}