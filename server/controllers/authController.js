const bcrypt = require('bcrypt');
const axios = require('axios');
const generalUtil = require('../../src/Utilities/generalUtil')

module.exports = {
    register: async (req, res, next) => {
        const db = req.app.get('db');
        const {userType, userName, userEmail, pw } = req.body;
        
        if(!generalUtil.validateEmail(userEmail)){
            res.status(400).send('Invalid Email');
            next();
        }
        if(!(userType !== 1 || userType !==2)){
            res.status(400).send('Invalid Account Type');
            next();
        }
        if(userName.length > 45){
            res.status(400).send('User Name Too Long');
            
        } else {
            await db.GET_USERNAMES([userName]).then(users=> {
                if(users.length !== 0){
                    if(users[0].user_email === userEmail){
                        res.status(400).send('Please Login')
                        
                    } else {
                        res.status(400).send('Username Taken')
                    }
                    
                    
                } else {
                    const salt = bcrypt.genSaltSync(10);
                    const hash = bcrypt.hashSync(pw, salt);
    
                    db.REGISTER_USER([userName, userEmail, hash, userType]).then(user=> {
                        res.status(200).send('User Created');
                    }).catch((err) => {
                        res.status(500).send('Server Error')
                    })
                }
            }).catch((err) => {
                res.status(500).send(`Error Trying to Get Usernames: ${err}`)
            })
        }
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