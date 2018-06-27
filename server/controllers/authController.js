const bcrypt = require('bcrypt');
const axios = require('axios');

module.exports = {
    register: async (req, res, next) => {
        const db = req.app.get('db');
        const {userType, userName, userEmail, pw } = req.body;
        console.log(req.body);

        await db.GET_USERNAMES([userName]).then(users=> {
            if(users.length !== 0){
                res.status(400).send('Username Taken')
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(pw, salt);

                db.REGISTER_USER([userName, userEmail, hash, userType]).then(user=> {
                    res.status(200).send('User Created');
                })
            }
        })
    },

    login: (req, res, next) => {
        const db = req.app.get('db');
        const {userName, pw} = req.body;

        db.GET_USERNAMES([userName]).then(user => {
            
            // Login if user account type is League
            if(user.length !== 0 && user[0].acct_type === 1){
                const userID = user[0].user_id
                const userPW = user[0].user_pw;
                const confirmedPW = bcrypt.compareSync(pw);
                if(confirmedPW){
                    
                }
            }
        })
    },

    logout: (req, res, next) => {

    },

    validate: (req, res, next) => {

    }
}